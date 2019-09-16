import { EPasswordCodes, MinimumPasswordStrengthRegex } from './regexes';

export class ValidatorsUtils {

  public static validatePasswords(pass1: string, pass2: string): EPasswordCodes {
    const reg = new RegExp(MinimumPasswordStrengthRegex);
    if (!pass1 || !pass2) {
      return EPasswordCodes.PasswordEmpty;
    } else if (pass1 !== pass2) {
      return EPasswordCodes.PasswordsDontMatch;
    } else  if (reg.test(pass1) && reg.test(pass2)) {
      return EPasswordCodes.PasswordsMatch;
    } else {
      return EPasswordCodes.PasswordNotStrongEnough;
    }
  }

}
