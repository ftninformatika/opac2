import {AfterViewInit, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ELocalizationLanguage} from '../../../../config/localization-laguage.enum';
import {Title} from '@angular/platform-browser';
import {Store} from '@ngxs/store';
import {ConfigState} from '../../../core/states/config/config.state';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage implements AfterViewInit {
  private readonly _translateService: TranslateService;
  private readonly _store: Store;
  private readonly _titleService: Title;
  private readonly _router: Router;
  showCookieDiv: boolean;

  public constructor(translateService: TranslateService, titleService: Title, store: Store, router: Router) {
    this._titleService = titleService;
    this._store = store;
    this._translateService = translateService;
    this._router = router;
    const title = this._store.selectSnapshot(ConfigState.fullLibName);
    this._titleService.setTitle(title);
    this._translateService.addLangs([ELocalizationLanguage.SERBIAN_CYRILIC,
      ELocalizationLanguage.US_ENGLISH, ELocalizationLanguage.SERBIAN_LATIN]);
    this._translateService.setDefaultLang(ELocalizationLanguage.SERBIAN_CYRILIC);
    this.showCookieDiv = true;

  }

  ngOnInit() {
    this.checkIfCookieAccepted();
  }

  ngAfterViewInit() {
    const navEndEvents = this._router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    );

    navEndEvents.subscribe(
      (event: NavigationEnd) => {
        gtag('config', 'UA-173939647-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    );
  }

  checkIfCookieAccepted() {
    if (this.readCookie('viewed_cookie_policy') != null)
      this.showCookieDiv = false;
  }

  acceptCookie() {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 365 * 24 * 60 * 60 * 1000;
    now.setTime(expireTime);
    document.cookie = 'viewed_cookie_policy=yes;expires=' + now.toUTCString() + ';path=/';
    this.showCookieDiv = false;
  }

  readCookie(name: any) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
