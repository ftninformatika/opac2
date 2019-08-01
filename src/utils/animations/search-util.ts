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
    const retVal = ISearchModelInitial;
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
}
