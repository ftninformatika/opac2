import { ISearchModel, ISearchModelInitial } from '../../models/search/search.model';
import { EAutoCompletePrefixes, IPrefixValue } from '../../models/prefix-value.model';

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
      retVal.pref1 = EAutoCompletePrefixes.PUBLISHERS;
      retVal.text1 = text + '*';
      retVal.oper1 = 'OR';
      retVal.pref2 = EAutoCompletePrefixes.TITLES;
      retVal.text2 = text + '*';
      retVal.oper2 = 'OR';
      retVal.pref3 = EAutoCompletePrefixes.AUTHORS;
      retVal.text3 = text + '*';
      retVal.oper3 = 'OR';
      retVal.pref4 = EAutoCompletePrefixes.KEYWORDS;
      retVal.text4 = text + '*';
      retVal.oper4 = 'OR';
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
    let retVal = '';
    if (!sm) {
      return retVal;
    }
    const texts: string[] = [];
    if (sm.text1 && sm.text1.trim() !== '') {
      texts.push(sm.text1);
    }
    if (sm.text2 && sm.text2.trim() !== '' && texts.indexOf(sm.text2) === -1) {
      texts.push(sm.text2);
    }
    if (sm.text3 && sm.text3.trim() !== '' && texts.indexOf(sm.text3) === -1) {
      texts.push(sm.text3);
    }
    if (sm.text4 && sm.text4.trim() !== '' && texts.indexOf(sm.text4) === -1) {
      texts.push(sm.text4);
    }
    if (sm.text5 && sm.text5.trim() !== '' && texts.indexOf(sm.text5) === -1) {
      texts.push(sm.text5);
    }
    retVal = texts.join(', ');
    return retVal;
  }
}
