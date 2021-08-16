import { ISearchModel, ISearchModelInitial } from '../models/search/search.model';
import { EAutoCompletePrefixes, IPrefixValue } from '../models/prefix-value.model';
import { PrefixUtils } from './prefix.utils';

export class SearchUtil {

  public static isIPrefVal(obj: any): obj is IPrefixValue {
    return typeof obj.value === 'string' && typeof obj.prefName === 'string';
  }

  public static generateSearchModelFromAutoComplete(text: string | IPrefixValue): ISearchModel {
    if (!text || text === '') {
      return null;
    }
    const retVal = {...ISearchModelInitial};
    if (SearchUtil.isIPrefVal(text)) {
      text = text as IPrefixValue;
      const pref = this.getPrefFromACPref(text.prefName);
      if (!pref) {
        return null;
      }
      retVal.text1 = text.value;
      retVal.pref1 = pref;
      return retVal;
    } else {
      // retVal.pref2 = EAutoCompletePrefixes.TITLES;
      retVal.oper1 = 'OR';
      retVal.pref2 = 'TI';
      retVal.text2 = text + '';
      retVal.oper2 = 'OR';
      // retVal.pref1 = EAutoCompletePrefixes.PUBLISHERS;
      // retVal.pref3 = EAutoCompletePrefixes.AUTHORS;
      retVal.pref3 = 'AU';
      retVal.text3 = text + '';
      retVal.oper3 = 'OR';
      // retVal.pref4 = EAutoCompletePrefixes.KEYWORDS;
      retVal.pref4 = 'KW';
      retVal.text4 = text + '';
      retVal.oper4 = 'OR';

      retVal.pref5 = 'PU';
      retVal.text5 = text + '';
      return retVal;
    }
  }

  public static getPrefFromACPref(acPref: string) {
    if (!acPref || (acPref !== EAutoCompletePrefixes.AUTHORS && acPref !== EAutoCompletePrefixes.PUBLISHERS &&
      acPref !== EAutoCompletePrefixes.TITLES && acPref !== EAutoCompletePrefixes.KEYWORDS)) {
      return null;
    }
    switch (acPref) {
      case EAutoCompletePrefixes.AUTHORS: return 'AU';
      case EAutoCompletePrefixes.KEYWORDS: return 'KW';
      case EAutoCompletePrefixes.TITLES: return 'TI';
      case EAutoCompletePrefixes.PUBLISHERS: return 'PU';
    }
  }

  public static getYouSearchedStringFromSearchModel(sm: ISearchModel): string {
    const retVal = '';
    if (!sm) {
      return retVal;
    }
    const universalText = this.universalSearchText(sm);
    if (universalText) {
      return universalText;
    }
    return this.advancedSearchText(sm);
  }

  private static universalSearchText(sm: ISearchModel): string {
    const searchInputsArr = [sm.text1, sm.text2, sm.text3, sm.text4];
    if (searchInputsArr.some(si => !si || si === '')) {
      return null;
    }
    if (!searchInputsArr.every((val, i, arr) => val === arr[0])) {
      return null;
    }
    return this.spanText(sm.text1) + ', по: аутору, наслову, издавачу и кљ. речима';
  }

  private static advancedSearchText(sm: ISearchModel): string {
    const texts: string[] = [];
    const prefixLabels = [sm.pref1, sm.pref2, sm.pref3, sm.pref4, sm.pref5].map(p => this.getPrefixLabel(p));
    if (sm.text1 && sm.text1.trim() !== '' && prefixLabels[0]) {
      texts.push(this.spanText(sm.text1) + ' - ' + prefixLabels[0]);
    }
    if (sm.text2 && sm.text2.trim() !== '' && texts.indexOf(sm.text2) === -1 && prefixLabels[1]) {
      texts.push(this.spanText(sm.text2) + ' - ' + prefixLabels[1]);
    }
    if (sm.text3 && sm.text3.trim() !== '' && texts.indexOf(sm.text3) === -1 && prefixLabels[2]) {
      texts.push(this.spanText(sm.text3) + ' - ' + prefixLabels[2]);
    }
    if (sm.text4 && sm.text4.trim() !== '' && texts.indexOf(sm.text4) === -1 && prefixLabels[3]) {
      texts.push(this.spanText(sm.text4) + ' - ' + prefixLabels[3]);
    }
    if (sm.text5 && sm.text5.trim() !== '' && texts.indexOf(sm.text5) === -1 && prefixLabels[4]) {
      texts.push(this.spanText(sm.text5) + ' - ' + prefixLabels[4]);
    }
    return texts.join(', ');
  }

  private static getPrefixLabel(prefCode: string): string {
    if (!prefCode || prefCode === '') {
      return null;
    }
    const pref = PrefixUtils.Prefixes.find(p => p.code === prefCode);
    if (!pref) {
      return null;
    }
    return pref.name;
  }

  private static spanText(text: string) {
    if (!text || text === '') {
      return null;
    }
    return `<span class="font-weight-bold">${text}</span>`;
  }
}
