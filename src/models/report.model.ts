export interface Report {
  property1: string; // LendDate for member history
  property2: string; // ReturnDate for member history
  property3: string; // Authors for member history
  property4: string; // Book title for member history
  property5: string; // CtlgNo for member history
  property6: string; // Record _id for member history
  property7: string; // deadline
  property8: string; // resumeDate
  property9: string; // mongo Id of lending
  property10: string; // Location desc where book is lend
  maxDatePassed?: boolean; // max date for returning lending
}
