import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { LocalizationState } from '../states/localization/localization.state';

@Pipe({
  name: 'trasnlateLazy',
  pure: false
})
export class TranslateLazyPipe implements PipeTransform {
  private readonly _translateService: TranslateService;
  public translations$: Observable<any>;

  public constructor(translateService: TranslateService, store: Store) {
    this._translateService = translateService;
    const currLang: string = store.selectSnapshot(LocalizationState.currLang);
    this.translations$ = of(this._translateService.translations[currLang]);
  }

  public transform(value: string): Observable<string> {
    return new Observable(
      observer => {
        this.translations$.subscribe(
          item => {
            if (!item) {
              return;
            }
            observer.next((item[value] !== undefined) ? item[value] : `?${value}`);
            observer.complete();
          }
        );
      }
    );
  }
}
