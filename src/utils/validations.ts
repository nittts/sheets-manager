export class ValidationUtils {
  public static hasUppercase(str: string) {
    return str !== str.toLowerCase();
  }

  public static hasLowerCase(str: string) {
    return str !== str.toUpperCase();
  }

  public static checkLength(str: string, length: number) {
    return str.length >= length;
  }

  public static hasNumber(str: string) {
    return /\d/.test(str);
  }

  public static strMatch(firstStr: string, secondStr: string) {
    return firstStr === secondStr;
  }
}
