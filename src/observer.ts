interface Observer {
    update(message: string): void;
}

interface Observable {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(message: string): void;
}

export { Observer, Observable };
