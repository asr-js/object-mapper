import read from './read';
import writer from './writer';

/**
 * 拷贝对象
 *
 * @param serializationFeature 具有序列化特性的对象
 * @param classReference 类类型
 */
export default function copy<T>(
  serializationFeature: any,
  classReference: { new (): T },
): T {
  const serialization = writer(serializationFeature);
  return read<T>(serialization, classReference);
}
