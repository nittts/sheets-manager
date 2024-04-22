export class ArrayUtils {
  public static findUnique<T, K extends keyof T>(arr: T[], key: K) {
    if (typeof arr[0] === "object") {
      return this.findUniqueOnObjectArr(arr, key);
    }

    return [...new Set(arr)];
  }

  public static mapByKey<T, K extends keyof T>(arr: T[], key: K) {
    return arr.map((item) => item[key]);
  }

  public static findUniqueOnObjectArr<T, K extends keyof T>(arr: T[], key: K) {
    return arr.filter((elem, idx, self) => self.findIndex((v) => v[key] === elem[key]) === idx);
  }
}
