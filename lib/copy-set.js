import read from './read';
/**
 * 拷贝对象集合
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copySet(serializationFeature, classReference) {
    const set = new Set();
    serializationFeature.forEach((value) => {
        set.add(read(value, classReference));
    });
    return set;
}
//# sourceMappingURL=copy-set.js.map