import copy from './copy';

/**
 * 拷贝对象映射
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copyMap<K, V>(
  serializationFeature: Map<K, V>,
  classReference: { new (): V },
): Map<K, V> {
  const result: Map<K, V> = new Map<K, V>();
  serializationFeature.forEach((value: V, key: K) => {
    result.set(key, copy(value, classReference));
  });
  return result;
}
