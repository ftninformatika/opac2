export const MinimumPasswordStrengthRegex = '^(?=.*[0-9])(?=.*[a-z]).{6,}$';

export enum EPasswordCodes {
  PasswordsDontMatch = 'PasswordsDontMatch',
  PasswordNotStrongEnough = 'PasswordNotStrongEnough',
  PasswordEmpty = 'PasswordEmpty',
  PasswordsMatch = 'PasswordsMatch'
}
