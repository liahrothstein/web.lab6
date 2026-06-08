/*
    1. Демонстрация сложения без присваивания переменным
    В скобках: сначала выполнится сложение (3 + 6 = 9), затем конкатенация строк
*/
export const withParentheses: string =
  'Сложим два числа 3 и 6 без присвоения их переменным: ' + (3 + 6);

// Без скобок: сработает левоассоциативность, и числа 3 и 6 превратятся в строки "3" и "6"
export const withoutParentheses: string = 'Без скобок: ' + 3 + 6;
// Функция обработки клика по кнопке опроса
export function handleCheckAge(setIsOver18: (isOver18: boolean | null) => void): void {
  // Встроенный метод confirm() возвращает true (OK) или false (Отмена)
  const userChoice: boolean = confirm('Вам больше 18 лет?');
  setIsOver18(userChoice);
}
