import read from './read';
/**
 * 将json映射读取为对象映射
 *
 * @param jsonMap json映射
 * @param classReference 类类型
 */
export default function readMap(jsonMap, classReference) {
    const result = new Map();
    jsonMap.forEach((value, key) => {
        result.set(key, read(value, classReference));
    });
    return result;
}
//# sourceMappingURL=read-map.js.map