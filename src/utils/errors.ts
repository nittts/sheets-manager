import { ErrorCodes } from "@/@types/errors";
import { useLang } from "@/stores/preferences";
import errors from "@/errors";

export class ErrorsUtils {
  static fetchErrorMsg(errorCode: ErrorCodes) {
    const langCode = useLang();

    const error = errors[errorCode];

    return error[langCode as keyof typeof error];
  }

  public static throw(errorCode: ErrorCodes) {
    return {
      code: errorCode,
      message: this.fetchErrorMsg(errorCode),
    };
  }
}
