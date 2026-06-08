export function handleCalculate(
  setResultMessage: (resultMessage: string) => void,
  inputValue: string,
): void {
  const n: number = parseInt(inputValue, 10);

  // Валидация ввода
  if (isNaN(n)) {
    setResultMessage('Пожалуйста, введите корректное число.');
    return;
  }

  if (n < 0) {
    setResultMessage('Факториал определен только для неотрицательных целых чисел.');
    return;
  }

  // Инициализируем переменную для накопления произведения
  let factorial: number = 1;

  // Оригинальный цикл for: начинаем с 1 и идем до n включительно
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  // Вывод строки (вместо document.write)
  setResultMessage(`Факториал ${n}! равен ${factorial}`);
}
