interface DateInfo {
  [key: string]: string;
  /**
   * the year as "2023", "2024", etc
   */
  yyyy: string;
  /**
   * the year as "23", "24", etc
   */
  yy: string;
  /**
   * the month as "01", "02", ..., "12"
   */
  MM: string;
  /**
   * the month as "1", "2", ..., "12"
   */
  M: string;
  //
  /**
   * the day as "01", "02", ..., "31"
   */
  dd: string;
  /**
   * the day as "1", "2", ..., "31"
   */
  d: string;
  /**
   * the hour (24-hour clock) as "00", "01", ..., "23"
   */
  HH: string;
  /**
   * the hour (24-hour clock) as "0", "1", ..., "23"
   */
  H: string;
  /**
   * "am" or "pm"
   */
  a: "am" | "pm";
  /**
   * the hour (12-hour clock) as "01", "02", ..., "12"
   */
  hh: string;
  /**
   * the hour (12-hour clock) as "1", "2", ..., "12"
   */
  h: string;
  /**
   * the minute as "00", "01", ..., "59"
   */
  mm: string;
  /**
   * the minute as "0", "1", ..., "59"
   */
  m: string;
  /**
   * the second as "00", "01", ..., "59"
   */
  ss: string;
  /**
   * the second as "0", "1", ..., "59"
   */
  s: string;
  /**
   * the millisecond as "000", "001", ..., "999"
   */
  SSS: string;
}

/**
 * Format the date.
 * @param date
 * @param formatter
 * @example
 *
 * const date = new Date() // Suppose it is 13:00:00.000 on December 12, 2023
 * console.log(format(date, "datetime"))    // 2023-12-12 13:00:00
 * console.log(format(date, "date"))        // 2023-12-12
 * console.log(format(date, "time"))        // 13:00:00
 * console.log(format(date, "yyyy/MM/dd"))  // 2023/12/12
 * console.log(format(date, dateInfo => dateInfo.SSS)   // 000
 */
function format(
  date: Date,
  formatter: string | ((dateInfo: DateInfo) => string)
): string {
  const info: DateInfo = {
    yyyy: date.getFullYear().toString(),
    yy: date.getFullYear().toString().slice(-2),
    MM: ("0" + (date.getMonth() + 1)).slice(-2),
    M: (date.getMonth() + 1).toString(),
    dd: ("0" + date.getDate()).slice(-2),
    d: date.getDate().toString(),
    HH: ("0" + date.getHours()).slice(-2),
    H: date.getHours().toString(),
    a: date.getHours() < 12 ? "am" : "pm",
    hh: ("0" + (date.getHours() % 12 || 12)).slice(-2),
    h: (date.getHours() % 12 || 12).toString(),
    mm: ("0" + date.getMinutes()).slice(-2),
    m: date.getMinutes().toString(),
    ss: ("0" + date.getSeconds()).slice(-2),
    s: date.getSeconds().toString(),
    SSS: ("00" + date.getMilliseconds()).slice(-3),
  };
  if (typeof formatter === "string") {
    if (formatter === "datetime") {
      return format(date, "yyyy-MM-dd HH:mm:ss");
    } else if (formatter === "date") {
      return format(date, "yyyy-MM-dd");
    } else if (formatter === "time") {
      return format(date, "HH:mm:ss");
    } else {
      return format(date, function (info) {
        let result: string = formatter;
        for (let key in info) {
          result = result.replace(new RegExp(key, "g"), info[key]);
        }
        return result;
      });
    }
  } else if (typeof formatter === "function") {
    return formatter(info);
  } else {
    throw new Error("Invalid formatter");
  }
}

export default format;
