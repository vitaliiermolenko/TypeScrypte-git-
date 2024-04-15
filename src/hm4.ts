// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
interface MyInterface {
    [key: string]: number | string; // Туть все норм лише потрібно закоментувати код нижче
  }
  
  const myObj: MyInterface = {
    key1: 10,
    key2: "value",
    key3: 3.14
  };
  
  console.log(myObj["key1"]); // Виведе 10
  console.log(myObj["key2"]); // Виведе "value"
  console.log(myObj["key3"]); // Виведе 3.14



//   Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
  interface EventHandlers {
    [eventName: string]: (...args: any[]) => void;
  }
  const eventHandlers: EventHandlers = {
    click: (x: number, y: number) => {
      console.log(`Click event at (${x}, ${y})`);
    },
    keyPress: (key: string) => {
      console.log(`Key pressed: ${key}`);
    },
  };
  
  eventHandlers.click(10, 20); // Виведе "Click event at (10, 20)"
  eventHandlers.keyPress("Enter"); // Виведе "Key pressed: Enter"
    


// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
function processObject(obj: { [key: string]: string | number  }) {
    const keysCount = Object.keys(obj).length;
    if (keysCount > 3) {
      console.log("Багато елементів");
    } else {
      console.log("Недостатньо елементів");
    }
  }
  
  // Приклад об'єкта, який передається у функцію processObject
  const myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4"
  };
  
  processObject(myObject);
  
  // Опишемо інтерфейс для об'єкта, подібного до масиву
  interface ArrayLikeObject {
    [index: number]: string;
    length: number;
  }
  
  // Приклад використання інтерфейсу ArrayLikeObject
  const myArrayLikeObj: ArrayLikeObject = {
    0: "value1",
    1: "value2",
    2: "value3",
    length: 3
  };
  
  console.log(myArrayLikeObj[0]); // Виведе "value1"
  console.log(myArrayLikeObj.length); // Виведе 3



//   Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface MyInterface {
    name: string;
    [key: string]: string | number ; // Туть все норм лише потрібно закоментувати код вище
}

class MyClass implements MyInterface {
    name: string;
    [key: string]: string | number ;

    constructor(name: string) {
        this.name = name;
    }
}

let obj = new MyClass("Об'єкт");
obj.name = "Новий об'єкт";
obj.age = 25; // Додаткова властивість
console.log(obj.name); // Виведе: Новий об'єкт
console.log(obj.age); // Виведе: 25



// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface BaseInterface {
    // Індексна сигнатура для довільних властивостей
    [key: string]: string | number ;
}

interface ExtendedInterface extends BaseInterface {
    specificProperty: number;
}

let obj1: BaseInterface = { prop1: "value1", prop2: 123 };
let obj2: ExtendedInterface = { prop1: "value2", prop2: 456, specificProperty: 789 };



// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

type IndexSignatureObject = { [key: string]: string | number | boolean };

function checkValues(obj: IndexSignatureObject): boolean {
    for (const key in obj) {
        if (typeof obj[key] !== 'number') {
            return false;
        }
    }
    return true;
}

// Приклад використання:
const exampleObject1 = { a: 1, b: 2, c: 3 };
const exampleObject2 = { a: 1, b: 'two', c: 3 };

console.log(checkValues(exampleObject1)); // Виведе: true
console.log(checkValues(exampleObject2)); // Виведе: false
