/**
 * 拷贝对象数组
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copyArray<T>(serializationFeature: any[], classReference: {
    new (): T;
}): T[];
//# sourceMappingURL=copy-array.d.ts.map