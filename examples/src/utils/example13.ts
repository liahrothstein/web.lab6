export class Car {
  // Явно объявляем типы свойств автомобиля
  public model: string;
  public color: string;
  public year: number;

  // Конструктор со значениями по умолчанию
  constructor(model: string = 'неизвестно', color: string = 'черный', year: number = 1900) {
    this.model = model;
    this.color = color;
    this.year = year;
  }

  // Методы объекта
  toString(): string {
    return `${this.model} ${this.color} ${this.year}`;
  }

  go(speed: number): string {
    return `Автомобиль ${this.toString()} движется со скоростью ${speed} км/ч`;
  }

  stop(): string {
    return `Автомобиль ${this.toString()} остановился`;
  }

  signal(): string {
    return `Автомобиль ${this.toString()} подал сигнал`;
  }
}
