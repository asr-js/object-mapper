import writer from './writer';
/**
 * 将对象数组输出为JSON对象数组
 *
 * @param serializationFeatures 具有序列化特性的对象
 */
export default function writerArray(serializationFeatures) {
    return serializationFeatures.map((item) => writer(item));
}
//# sourceMappingURL=writer-array.js.map