export const a: number = 3;
export const b: number = 8;

// Логика ветвления для определения знака сравнения
export let comparisonResult: string;
if (a > b) {
  comparisonResult = 'a > b';
} else {
  comparisonResult = 'a <= b';
}

export function handleCheckParity(inputValue: string): void {
  // Преобразуем строку из инпута в целое число
  const parsedNumber: number = parseInt(inputValue, 10);

  // Проверяем на NaN (на случай, если пользователь очистил поле или ввел буквы)
  if (isNaN(parsedNumber)) {
    alert('Пожалуйста, введите корректное число');
    return;
  }

  // Оператор % вычисляет остаток от деления на 2
  if (parsedNumber % 2 === 0) {
    alert('Четное');
  } else {
    alert('Нечетное');
  }
}
