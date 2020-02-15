import copy from './copy';
/**
 * 拷贝对象映射
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copyMap(serializationFeature, classReference) {
    const result = new Map();
    serializationFeature.forEach((value, key) => {
        result.set(key, copy(value, classReference));
    });
    return result;
}
//# sourceMappingURL=copy-map.js.map