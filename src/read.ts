import jsonConvert from './json-convert';

/**
 * 将json读取为对象
 *
 * @param json json
 * @param classReference 类类型
 */
export default function read<T>(json: any, classReference: { new (): T }): T {
  return jsonConvert.deserializeObject(json, classReference);
}
