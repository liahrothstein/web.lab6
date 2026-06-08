// Функция вычисления площади
function calculateSquare(a: string, b: string): number {
  const parsedA = parseFloat(a);
  const parsedB = parseFloat(b);

  // Простая валидация: если введены не числа, возвращаем 0
  if (isNaN(parsedA) || !parsedB) return 0;

  return parsedA * parsedB;
}

// Обработчик клика по кнопке «Вычислить»
export function handleCalculate(
  e: React.MouseEvent<HTMLInputElement>,
  setArea: (area: string) => void,
  sideA: string,
  sideB: string,
) {
  e.preventDefault();

  const result = calculateSquare(sideA, sideB);
  setArea(result.toString()); // Записываем результат в стейт площади
}
