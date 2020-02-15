# Date Utils

*时间工具*

<br/>

## 安装

### npm

``` sh
npm install git+https://github.com/asr-js/object-mapper.git#v1.0.0
```

### yarn

``` sh
yarn add git+https://github.com/asr-js/object-mapper.git#v1.0.0
```

<br/>

## 简介

用于TypeScript类的序列化与反序列化。

<br/>

## 方法

### read\<T\>(jsonObject: any, classReference: { new (): T }): T

#### 描述
将json读取为对象

#### 示例

```typescript
import { read } from 'object-mapper';

const object: any = { name: '小明' };

const student: Student = read(object, Student);
```

<br/>

### readArray\<T\>(jsonArray: any[], classReference: { new (): T }): T[]

#### 描述
将json数组读取为对象数组

#### 示例

```typescript
import { readArray } from 'object-mapper';

const array: any[] = [{ name: '小明' }, { name: '小红' }];

const students: Student[] = readArray(array, Student);
```

<br/>

### readSet\<T\>(jsonSet: Set\<any\>, classReference: { new (): T }): Set\<T\>

#### 描述
将json集合读取为对象集合

#### 示例

```typescript
import { readSet } from 'object-mapper';

const set: Set<any> = new Set();
set.add({ name: '小明' });
set.add({ name: '小明' });

const studentSet: Set<Student> = readSet(set, Student);
```

<br/>

### readMap\<K, V\>(jsonMap: Map\<K, V\>, classReference: { new (): V }): Map\<K, V\>

#### 描述
将json映射读取为对象映射

#### 示例

```typescript
import { readMap } from 'object-mapper';

const map: Map<string, any> = new Map();
map.set('1', { name: '小明' });
map.set('2', { name: '小明' });

const studentMap: Map<Student> = readMap(map, Student);
```

<br/>

### copy\<T\>(serializationFeature: any, classReference: { new (): T }): T

#### 描述
拷贝对象

#### 示例

```typescript
import { read, copy } from 'object-mapper';

const object: any = { name: '小明' };

const student: Student = read(object, Student);
const copy: Student = copy(student, Student);
```

<br/>

### copyArray\<T\>(serializationFeature: any[], classReference: { new (): T }): T[]

#### 描述
拷贝对象数组

#### 示例

```typescript
import { readArray, copyArray } from 'object-mapper';

const array: any[] = [{ name: '小明' }, { name: '小红' }];

const students: Student[] = readArray(array, Student);
const copy: Student[] = copyArray(students, Student);
```

<br/>

### copySet\<T\>(serializationFeature: Set\<any\>, classReference: { new (): T }): Set\<T\>

#### 描述
拷贝对象集合

#### 示例

```typescript
import { readSet, copySet } from 'object-mapper';

const set: Set<any> = new Set();
set.add({ name: '小明' });
set.add({ name: '小明' });

const studentSet: Set<Student> = readSet(set, Student);
const copy: Set<Student> = copySet(studentSet, Student);

```

<br/>

### copyMap\<K, V\>(serializationFeature: Map\<K, V\>, classReference: { new (): V }): Map\<K, V\>

#### 描述
拷贝对象映射

#### 示例

```typescript
import { readMap, copyMap } from 'object-mapper';

const map: Map<string, any> = new Map();
map.set('1', { name: '小明' });
map.set('2', { name: '小明' });

const studentMap: Map<Student> = readMap(map, Student);
const copy: Map<Student> = copyMap(studentMap, Student);

```

<br/>

### writer(serializationFeature: any): any

#### 描述
将对象输出为JSON对象

#### 示例

```typescript
import { read, writer } from 'object-mapper';

const object: any = { name: '小明' };

const student: Student = read(object, Student);
const jsonObject: any = writer(student);
```

<br/>

### writerArray(serializationFeature: any[]): any[]

#### 描述
将对象数组输出为JSON对象数组

#### 示例

```typescript
import { readArray, writerArray } from 'object-mapper';

const array: any = [{ name: '小明' }];

const students: Student[] = readArray(array, Student);
const jsonArray: any[] = writerArray(students);
```

<br/>

## 示例文件

`Student.ts`

```typescript
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Student')
export default class Student {
  /** name */
  @JsonProperty('name', String)
  public name: string = '';

  public get description() {
    return `${this.name}同学`;
  }
}

```

<br/>

## 注意事项

- 仅适用于TypeScript