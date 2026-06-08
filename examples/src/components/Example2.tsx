import React from 'react';

import { exprStr, sum1, sum2, sum3, sum4, sum5 } from '../utils/example2';

export function Example2() {
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
