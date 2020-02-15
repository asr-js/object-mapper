import read from './read';
/**
 * 将json数组读取为对象数组
 *
 * @param jsonArray json数组
 * @param classReference 类类型
 */
export default function readArray(jsonArray, classReference) {
    return jsonArray.map((value) => read(value, classReference));
}
//# sourceMappingURL=read-array.js.map