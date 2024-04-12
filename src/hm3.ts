class Circle {
    private readonly _name: string;
    private readonly _color: string;
    private readonly _radius: number;

    constructor(name: string, color: string, radius: number) {
        this._name = name;
        this._color = color;
        this._radius = radius;
    }

    get name(): string {
        return this._name;
    }

    get color(): string {
        return this._color;
    }

    calculateArea(): number {
        return Math.PI * this._radius ** 2;
    }

    print(): void {
        console.log(`Area of ${this._name} = ${this.calculateArea()}`);
    }
}

class Rectangle {
    private readonly _name: string;
    private readonly _color: string;
    private readonly _width: number;
    private readonly _height: number;

    constructor(name: string, color: string, width: number, height: number) {
        this._name = name;
        this._color = color;
        this._width = width;
        this._height = height;
    }

    get name(): string {
        return this._name;
    }

    get color(): string {
        return this._color;
    }

    calculateArea(): number {
        return this._width * this._height;
    }

    print(): void {
        console.log(`Area of ${this._name} = ${this.calculateArea()}`);
    }
}

class Square extends Rectangle {
    constructor(name: string, color: string, sideLength: number) {
        super(name, color, sideLength, sideLength);
    }
}

class Triangle {
    private readonly _name: string;
    private readonly _color: string;
    private readonly _base: number;
    private readonly _height: number;

    constructor(name: string, color: string, base: number, height: number) {
        this._name = name;
        this._color = color;
        this._base = base;
        this._height = height;
    }

    get name(): string {
        return this._name;
    }

    get color(): string {
        return this._color;
    }

    calculateArea(): number {
        return 0.5 * this._base * this._height;
    }

    print(): void {
        console.log(`Area of ${this._name} = ${this.calculateArea()}`);
    }
}

// Приклад використання:
const circle = new Circle("Circle", "red", 5);
circle.print();

const rectangle = new Rectangle("Rectangle", "blue", 4, 6);
rectangle.print();

const square = new Square("Square", "green", 5);
square.print();

const triangle = new Triangle("Triangle", "yellow", 4, 3);
triangle.print();
