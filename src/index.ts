// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface Person {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}

const person: Person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

const readonlyPerson: DeepReadonly<Person> = person;


// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

interface NestedObject {
    a: number;
    b: {
        c: string;
        d?: boolean;
    };
}

const obj: DeepRequireReadonly<NestedObject> = {
    a: 30,
    b: {
        c: "John",
        d: true
    }
};


// Вам потрібно створити тип UpperCaseKeys, який буде приводити всі ключі до верхнього регістру.

type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
  };
  
  interface MyInterface {
    name: string;
    age: number;
  }
  
  const obj: UpperCaseKeys<MyInterface> = {
    NAME: 'john',
    AGE: 30,
  };
  
  
//   І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};

const obj: ObjectToPropertyDescriptor<{ a: number, b: string }> = {
  a: { value: 5, writable: true, enumerable: true, configurable: true },
  b: { value: "Hello", writable: true, enumerable: true, configurable: true }
};
