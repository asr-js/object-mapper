/**
 * 将json集合读取为对象集合
 *
 * @param jsonSet json集合
 * @param classReference 类类型
 */
export default function readSet<T>(jsonSet: Set<any>, classReference: {
    new (): T;
}): Set<T>;
//# sourceMappingURL=read-set.d.ts.map