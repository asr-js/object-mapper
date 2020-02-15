import read from './read';
/**
 * 将json集合读取为对象集合
 *
 * @param jsonSet json集合
 * @param classReference 类类型
 */
export default function readSet(jsonSet, classReference) {
    const set = new Set();
    jsonSet.forEach((value) => set.add(read(value, classReference)));
    return set;
}
//# sourceMappingURL=read-set.js.map