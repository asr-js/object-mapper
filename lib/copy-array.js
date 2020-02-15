import writer from './writer';
import read from './read';
/**
 * 拷贝对象数组
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copyArray(serializationFeature, classReference) {
    return serializationFeature
        .map((value) => writer(value))
        .map((value) => read(value, classReference));
}
//# sourceMappingURL=copy-array.js.map