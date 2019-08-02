export interface ISearchModel {
  pref1: string;
  pref2: string;
  pref3: string;
  pref4: string;
  pref5: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  oper1: string;
  oper2: string;
  oper3: string;
  oper4: string;
  sort: string;
  departments: string[];
  branches: string[];
}

export const ISearchModelInitial: ISearchModel = {
  branches: [],
  departments: [],
  oper1: 'AND',
  oper2: 'AND',
  oper3: 'AND',
  oper4: 'AND',
  pref1: '',
  pref2: '',
  pref3: '',
  pref4: '',
  pref5: '',
  sort: '',
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  text5: ''
};
