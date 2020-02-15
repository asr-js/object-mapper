/**
 * 拷贝对象集合
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copySet<T>(serializationFeature: Set<any>, classReference: {
    new (): T;
}): Set<T>;
//# sourceMappingURL=copy-set.d.ts.map