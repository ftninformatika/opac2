import {AfterViewInit, Component, ElementRef, OnInit, OnDestroy, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Store} from '@ngxs/store';
import {ConfigState} from '../../../core/states/config/config.state';
import {UserState} from '../../../core/states/user/user.state';
import {NavigationEnd, Router} from '@angular/router';
import {combineLatest, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ViewportScroller, isPlatformBrowser} from '@angular/common';
import { ApiEndpointConfig } from 'src/config/api-endpoint.config';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage implements AfterViewInit, OnInit, OnDestroy {
  private readonly _store: Store;
  private readonly _titleService: Title;
  private readonly _router: Router;
  private readonly _viewportScroller: ViewportScroller;
  public showCookieDiv: boolean;
  public isChatOpen = false;
  public placeholderStyle = {
    placeholder: {
      text: "Постави питање...",
      style: { color: '#888' }
    }
  }
  public messageStyles = {
    default: {
      user: { bubble: { backgroundColor: '#0099CC', color: 'white' } },
      ai: { bubble: { backgroundColor: '#f4f4f4' } }
    }
  }
  public request: {url: string; method: string; headers: Record<string, string>} = {
    url: ApiEndpointConfig.Paths.chat.ask,
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }
  private _chatRequestSubscription?: Subscription;
  private _currentToken: string | null = null;
  private _currentLibrary: string | null = null;
  private _chatId: string;
  public deepChatLoaded = false;
  @ViewChild('deepChatEl') deepChatEl?: ElementRef;

  public constructor(titleService: Title, store: Store, router: Router, viewportScroller: ViewportScroller, @Inject(PLATFORM_ID) private platformId: Object) {
    this._titleService = titleService;
    this._store = store;
    this._router = router;
    const title = this._store.selectSnapshot(ConfigState.fullLibName);
    this._titleService.setTitle(title);
    this.showCookieDiv = true;
    this._viewportScroller = viewportScroller;
    this._chatId = this.generateUuid();
  }

  ngOnInit() {
    this.checkIfCookieAccepted();
    if (isPlatformBrowser(this.platformId)) {
      import('deep-chat').then(() => { this.deepChatLoaded = true; });   // runs only in the browser, never on the server
      this._chatRequestSubscription = combineLatest([
        this._store.select(UserState.token),
        this._store.select(UserState.library),
        this._store.select(ConfigState.library)
      ]).subscribe(([token, memberLibrary, configLibrary]) => {
        this._currentToken = token;
        this._currentLibrary = memberLibrary || configLibrary;
        this.request = this.buildChatRequest(this._chatId);
      });
    }
  }

  ngOnDestroy() {
    this._chatRequestSubscription?.unsubscribe();
  }

  startNewConversation() {
    this._chatId = this.generateUuid();
    this.request = this.buildChatRequest(this._chatId);
    const deepChat: any = this.deepChatEl?.nativeElement;
    deepChat?.clearMessages?.();
  }

  private buildChatRequest(chatId: string): {url: string; method: string; headers: Record<string, string>} {
    return {
      url: ApiEndpointConfig.Paths.chat.ask,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Library: this._currentLibrary || '',
        'X-Chat-Id': chatId,
        ...(this._currentToken ? {Authorization: `Bearer ${this._currentToken}`} : {})
      }
    };
  }

  private generateUuid(): string {
    const cryptoObj: any = typeof crypto !== 'undefined' ? crypto : undefined;
    if (cryptoObj && typeof cryptoObj.randomUUID === 'function') {
      return cryptoObj.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
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
    if (this.readCookie('viewed_cookie_policy') != null) {
      this.showCookieDiv = false;
    }
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
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
  }

  scrollToElement(target: string){
    this._viewportScroller.scrollToAnchor(target);
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
