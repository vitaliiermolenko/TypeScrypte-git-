// // Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.

interface IDeprecationReason {
    reason: string;
    replaceMethod?: string;
  }
  
  function DeprecatedMethod(reason: IDeprecationReason) {
    return function DeprecatedMethod<T, A extends any[], R>(originalMethod: (...args: A) => R, context: ClassMethodDecoratorContext<T, (...args: A) => R>) {
      if (context.kind !== "method") throw new Error("Method-only decorator");
  
      function replacementMethod(this: T, ...args: A): R {
        console.warn(`${String(context.name)} is deprecated and will be removed in a future version, because of the ${reason.reason}.`
        );
  
        if (reason.replaceMethod) {
          console.warn(`Please use ${reason.replaceMethod} instead.`);
        }
        return originalMethod.apply(this, args);
      }
      return replacementMethod;
    };
  }
  
  class MyClass {
    @DeprecatedMethod({reason: "is deprecated method", replaceMethod: "is a good method"})
    public MyMethod(): void {
        console.log('MyMethod');
      }
  }
  

//   Створіть декоратори MinLength, MaxLength та Email
const MaxLength = 20;
function maxLength<T, A extends any[], R>(originalMethod: (...args: A) => R, context: ClassMethodDecoratorContext<T, (...args: A) => R>) {

    if (context.kind !== "method") throw new Error("Method-only decorator");
    function maxLengthMethod(this: T, ...args: A): R {

      if (args[0] === undefined || typeof args[0] !== "string") {
        console.warn("Only strings are allowed");
      }
      if (args[0].length > MaxLength) {
        console.warn(`Cannot be longer than ${MaxLength} characters`);
      }
      return originalMethod.apply(this, args);
    }
    return maxLengthMethod;
  }

  
  const MinLength = 5;
  function minLength<T, A extends any[], R>(originalMethod: (...args: A) => R, context: ClassMethodDecoratorContext<T, (...args: A) => R>) {

    if (context.kind !== "method") throw new Error("Method-only decorator");
    function minLengthMethod(this: T, ...args: A): R {

      if (args[0] === undefined || typeof args[0] !== "string") {
        console.warn("Only strings are allowed");
      }
      if (args[0].length < MinLength) {
        console.warn(`Cannot be shorter than ${MinLength} characters`);
      }
      return originalMethod.apply(this, args);
    }
    return minLengthMethod;
  }
  

  function Email<T, A extends any[], R>(originalMethod: (...args: A) => R, context: ClassMethodDecoratorContext<T, (...args: A) => R>) {

    if (context.kind !== "method") throw new Error("Method-only decorator");
    function replacementMethod(this: T, ...args: A): R {

      if (args[0] === undefined || typeof args[0] !== "string") {
        console.warn("Only strings are allowed");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(args[0])) {
        console.warn(`Must be a valid email address`);
      }
      return originalMethod.apply(this, args);
    }
    return replacementMethod;
  }
  
  class MyClass {
    @maxLength
    @minLength
    @Email
    public MyMethod(): void {
        console.log('MyMethod');
      }
  }
  
  const someObject = new MyClass();