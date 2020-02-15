import { JsonConvert, ValueCheckingMode } from 'json2typescript';
const jsonConvert = new JsonConvert();
jsonConvert.ignorePrimitiveChecks = false;
jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
export default jsonConvert;
//# sourceMappingURL=json-convert.js.map