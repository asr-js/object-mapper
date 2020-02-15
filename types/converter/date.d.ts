import { JsonCustomConvert } from 'json2typescript';
/**
 * Date Converter
 *
 * @author surh
 */
export default class DateConverter implements JsonCustomConvert<Date | null> {
    /**
     * 序列化
     *
     * @param value Date
     */
    serialize(value: null | Date): any;
    /**
     * 反序列化
     *
     * @param value 时间字符串
     */
    deserialize(value: any): null | Date;
}
//# sourceMappingURL=date.d.ts.map