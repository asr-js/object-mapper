import read from './read';

/**
 * 拷贝对象集合
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copySet<T>(
  serializationFeature: Set<any>,
  classReference: { new (): T },
): Set<T> {
  const set: Set<T> = new Set<T>();
  serializationFeature.forEach((value) => {
    set.add(read<T>(value, classReference));
  });
  return set;
}
