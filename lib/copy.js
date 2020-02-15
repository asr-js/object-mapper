import read from './read';
import writer from './writer';
/**
 * 拷贝对象
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copy(serializationFeature, classReference) {
    const serialization = writer(serializationFeature);
    return read(serialization, classReference);
}
//# sourceMappingURL=copy.js.map