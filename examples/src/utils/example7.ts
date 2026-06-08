export function handleCalculatePower(
  setError: (error: string) => void,
  setDisplayBase: (displayBase: number | null) => void,
  setDisplayPower: (displayPower: number | null) => void,
  setResult: (result: number | null) => void,
  baseInput: string,
  powerInput: string,
): void {
  setError('');

  const n: number = parseInt(baseInput, 10);
  let grade: number = parseInt(powerInput, 10);

  // Валидация входных данных
  if (isNaN(n) || !Number.isInteger(n) || isNaN(grade) || !Number.isInteger(grade)) {
    setError('Пожалуйста, введите корректные целые числа.');
    return;
  }

  // Сохраняем исходные значения для вывода на экран (аналог var buf = grade)
  const originalBase = n;
  const originalPower = grade;

  let calculationResult = 1;

  if (n === 0) {
    calculationResult = 0;
  } else if (n !== 0 && grade === 0) {
    calculationResult = 1;
  } else {
    // Если степень отрицательная, превращаем её в положительную
    if (grade < 0) {
      grade *= -1;
    }

    // Вычисление степени с помощью цикла while
    while (grade > 0) {
      calculationResult *= n;
      grade--;
    }
  }

  // Обновляем стейты отображения результатов
  setDisplayBase(originalBase);
  setDisplayPower(originalPower);
  setResult(calculationResult);
}
