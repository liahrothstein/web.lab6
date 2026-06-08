// Арифметические операторы (Имитация вычислений)
const a1 = 100,
  b1 = 10;
export const step1 = a1 + b1; // 110
export const step2 = step1 - b1; // 100
export const step3 = step2 * b1; // 1000
export const step4 = step3 / b1; // 100

const a2 = 9,
  b2 = 7;
export const step5 = a2 % b2; // 2
export const step6 = (2 * 7) / 2 + 7 - (2 % 7); // Выражение: 2*7/2 + 7 - 2 = 7 + 7 - 2 = 12

// Логика инкремента/декремента (постфикс/префикс)
let calcA = 12;
export const postIncrement = calcA++; // Вернет 12, calcA станет 13
export const postDecrement = calcA--; // Вернет 13, calcA станет 12
export const unaryMinus = -calcA; // -12

export function handleLinkClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  clickCount: number,
  setClickCount: (clickCount: number) => void,
) {
  e.preventDefault();
  // Имитируем префиксный инкремент ++sum (сначала увеличиваем, потом выводим)
  const newCount = clickCount + 1;
  setClickCount(newCount);
  alert(`Вы нажали ${newCount} раз`);
}

export function calculate(
  operator: '+' | '-' | '*' | '/',
  setMathResult: (mathResult: number | string) => void,
  num1: string,
  num2: string,
) {
  const parsed1 = parseInt(num1, 10) || 0;
  const parsed2 = parseInt(num2, 10) || 0;

  switch (operator) {
    case '+':
      setMathResult(parsed1 + parsed2);
      break;
    case '-':
      setMathResult(parsed1 - parsed2);
      break;
    case '*':
      setMathResult(parsed1 * parsed2);
      break;
    case '/':
      setMathResult(parsed2 !== 0 ? parsed1 / parsed2 : 'Ошибка (деление на 0)');
      break;
  }
}

export function handleConcatStrings(
  setStrResult: (strResult: string) => void,
  str1: string,
  str2: string,
) {
  setStrResult(str1 + str2);
}

export function handleLogic(
  operation: 'AND' | 'OR' | 'NOT',
  setLogicResult: (logicResult: string) => void,
  bool1: boolean,
  bool2: boolean,
) {
  if (operation === 'AND') setLogicResult(bool1 && bool2 ? 'true' : 'false');
  if (operation === 'OR') setLogicResult(bool1 || bool2 ? 'true' : 'false');
  if (operation === 'NOT') setLogicResult(!bool1 ? 'true' : 'false'); // Спецификация: только для 1-го элемента
}
