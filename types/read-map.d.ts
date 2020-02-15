/**
 * 将json映射读取为对象映射
 *
 * @param jsonMap json映射
 * @param classReference 类类型
 */
export default function readMap<K, V>(jsonMap: Map<K, V>, classReference: {
    new (): V;
}): Map<K, V>;
//# sourceMappingURL=read-map.d.ts.map