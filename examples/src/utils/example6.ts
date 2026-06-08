export function handleCalculateFactorial(
  inputValue: string,
  setResultMessage: (resultMessage: string) => void,
): void {
  let n: number = parseInt(inputValue, 10);

  // Валидация: если введено не число
  if (isNaN(n)) {
    setResultMessage('Пожалуйста, введите корректное целое число.');
    return;
  }

  // Сохраняем исходное значение для вывода (аналог var buf = n)
  const buf: number = n;

  // Защита от отрицательных чисел
  if (n < 0) {
    n *= -1;
  }

  let factorial: number = 1;

  /*
    Вычисление факториала через цикл do...while
    Цикл гарантированно выполнится хотя бы один раз (для 0! или 1! вернет 1)
  */
  do {
    if (n === 0) break; // Для нуля факториал равен 1, выходим из цикла
    factorial *= n;
    n--;
  } while (n > 0);

  // Формируем результирующую строку (аналог document.write)
  setResultMessage(`Факториал ${buf}! равен ${factorial}`);
}
