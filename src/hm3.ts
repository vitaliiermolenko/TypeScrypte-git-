// Interface для фігур
interface IShape {
    readonly name: string;
    readonly color: string;
    calculateArea(): number;
}

// Абстрактний клас для прямокутних фігур
abstract class ARectangles implements IShape {
    readonly name: string;
    readonly color: string;
    protected width: number;
    protected height: number;

    constructor(name: string, color: string, width: number, height: number) {
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    abstract print(): void;
}

// Клас кола
class Circle implements IShape {
    readonly name: string;
    readonly color: string;
    private readonly radius: number;

    constructor(color: string, radius: number) {
        this.name = "Circle";
        this.color = color;
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Клас прямокутника
class Rectangle extends ARectangles {
    constructor(color: string, width: number, height: number) {
        super("Rectangle", color, width, height);
    }

    print(): void {
        console.log(`Area of ${this.name} (${this.color}): ${this.width} * ${this.height}`);
    }
}

// Клас квадрата
class Square extends ARectangles {
    constructor(color: string, sideLength: number) {
        super("Square", color, sideLength, sideLength);
    }

    print(): void {
        console.log(`Area of ${this.name} (${this.color}): ${this.width} * ${this.height}`);
    }
}

// Клас трикутника
class Triangle implements IShape {
    readonly name: string;
    readonly color: string;
    private readonly base: number;
    private readonly height: number;

    constructor(color: string, base: number, height: number) {
        this.name = "Triangle";
        this.color = color;
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}

// Приклад використання
const square = new Square("red", 5);
console.log(square.calculateArea());
square.print(); 

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.calculateArea()); 
rectangle.print(); 

const circle = new Circle("blue", 3);
console.log(circle.calculateArea());

const triangle = new Triangle("green", 4, 6);
console.log(triangle.calculateArea());
