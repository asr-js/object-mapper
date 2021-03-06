import jsonConvert from './json-convert';

/**
 * 将对象输出为JSON对象
 *
 * @param serializationFeature 具有序列化特性的对象
 */
export default function writer(serializationFeature: any): any {
  return jsonConvert.serializeObject(serializationFeature);
}
