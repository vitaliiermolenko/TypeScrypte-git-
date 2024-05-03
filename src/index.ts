// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. Як параметр типу повинен обов'язково виступати функціональний тип.

type ReturnTypeOfFunction<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

function exampleFunction(): number {
    return 5;
}

type ResultType = ReturnTypeOfFunction<typeof exampleFunction>; 


// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру.

type FunctionType<T> = T extends (arg: infer U) => infer R ? [R, U] : never;


function exampleFunc(input: string): number {
    return input.length;
}

type ExampleResult = FunctionType<typeof exampleFunc>; 
