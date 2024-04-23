function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
    return array.filter(condition);
}

class Stack<T> {
    private elements: T[];

    push(item: T): void {
        this.elements.push(item);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }

    peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }
}

type ValidKey = string | number | symbol;

class Dictionary<T> {
    private elements: { [key in ValidKey]?: T } = {};

  set(key: ValidKey, value: T): void {
    this.elements[key] = value;
  }

  get(key: ValidKey): T | undefined {
    return this.elements[key];
  }

  has(key: ValidKey): boolean {
    return key in this.elements;
  }
}
