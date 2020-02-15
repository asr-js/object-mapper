/**
 * 拷贝对象映射
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copyMap<K, V>(serializationFeature: Map<K, V>, classReference: {
    new (): V;
}): Map<K, V>;
//# sourceMappingURL=copy-map.d.ts.map