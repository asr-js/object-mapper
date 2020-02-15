/**
 * 将json数组读取为对象数组
 *
 * @param jsonArray json数组
 * @param classReference 类类型
 */
export default function readArray<T>(jsonArray: any[], classReference: {
    new (): T;
}): T[];
//# sourceMappingURL=read-array.d.ts.map