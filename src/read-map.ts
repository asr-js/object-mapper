import read from './read';

/**
 * 将json映射读取为对象映射
 *
 * @param jsonMap json映射
 * @param classReference 类类型
 */
export default function readMap<K, V>(
  jsonMap: Map<K, V>,
  classReference: { new (): V },
): Map<K, V> {
  const result: Map<K, V> = new Map<K, V>();
  jsonMap.forEach((value: V, key: K) => {
    result.set(key, read(value, classReference));
  });
  return result;
}
