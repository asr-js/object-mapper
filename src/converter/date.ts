import { JsonConverter, JsonCustomConvert } from 'json2typescript';

// ---------------- Utils
import { parseDate } from 'date-utils';

/**
 * Date Converter
 *
 * @author surh
 */
@JsonConverter
export default class DateConverter implements JsonCustomConvert<Date | null> {
  /**
   * 序列化
   *
   * @param value Date
   */
  public serialize(value: null | Date): any {
    return value ? value.getTime() : null;
  }

  /**
   * 反序列化
   *
   * @param value 时间字符串
   */
  public deserialize(value: any): null | Date {
    return value ? parseDate(value) : null;
  }
}
