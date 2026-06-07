import React from 'react';

// Безопасная замена eval() для простых математических выражений (сложение/вычитание)
function safeEval(expr: string): number {
  // Разбиваем строку на числа и знаки, убирая пробелы
  const tokens = expr.replace(/\s+/g, '').match(/(\d+|\+|-)/g);
  if (!tokens) return 0;

  let result = parseInt(tokens[0], 10);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextValue = parseInt(tokens[i + 1], 10);

    if (operator === '+') result += nextValue;
    if (operator === '-') result -= nextValue;
  }
  return result;
}

export function Example2() {
  // 1. Создаем переменные разных типов со строгой типизацией
  const initialStr: string = '2+3=';
  const intVal: number = 5;

  // 2. Складываем строку и число (неявное приведение типов в JS всё еще работает)
  const sum1: string = initialStr + intVal;

  // 3. Переопределение переменной другим типом.
  // В TS вместо "var str = 2" мы создаем новую переменную с корректным типом number
  const strAsNumber: number = 2;
  const sum2: number = strAsNumber + intVal;

  // 4. Преобразование строки в числовую переменную (целое число)
  const numericStr: string = '45';
  const sum3: number = intVal + parseInt(numericStr, 10); // Явно указываем radix (десятичную систему)

  // 5. Преобразование строки в числовую переменную (с плавающей точкой)
  const floatStr: string = '34.56';
  const sum4: number = intVal + parseFloat(floatStr);

  // 6. Вычисление математического выражения, представленного в виде строки
  const exprStr: string = '5+17-3';
  const sum5: number = safeEval(exprStr);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', lineHeight: '1.6' }}>
      <h2>Пример 2</h2>
      <hr />

      <div>
        <strong>Сложили строку &quot;2+3=&quot; и число 5. Результат:</strong> {sum1}
      </div>

      <div>
        <strong>Сложили переменные str=2 и intVal=5. Результат:</strong> {sum2}
      </div>

      <div>
        <strong>Сложили intVal + parseInt(str). Результат:</strong> {sum3}
      </div>

      <div>
        <strong>Сложили intVal + parseFloat(str). Результат:</strong> {sum4}
      </div>

      <div>
        <strong>Вычисляем строку eval(&quot;{exprStr}&quot;). Результат:</strong> {sum5}
      </div>
    </div>
  );
}
