import { __decorate } from "tslib";
import { JsonConverter } from 'json2typescript';
// ---------------- Utils
import { parseDate } from 'date-utils';
/**
 * Date Converter
 *
 * @author surh
 */
let DateConverter = class DateConverter {
    /**
     * 序列化
     *
     * @param value Date
     */
    serialize(value) {
        return value ? value.getTime() : null;
    }
    /**
     * 反序列化
     *
     * @param value 时间字符串
     */
    deserialize(value) {
        return value ? parseDate(value) : null;
    }
};
DateConverter = __decorate([
    JsonConverter
], DateConverter);
export default DateConverter;
//# sourceMappingURL=date.js.map