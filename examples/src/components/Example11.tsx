import React, { useState } from 'react';

export function Example11() {
  // Инициализируем состояния для сторон "a", "b" и результата "s"
  // Храним как строки, чтобы пользователю было удобно стирать и вводить цифры в инпут
  const [sideA, setSideA] = useState<string>('1');
  const [sideB, setSideB] = useState<string>('1');
  const [area, setArea] = useState<string>('');

  // Функция вычисления площади (аналог функции square из исходного текста)
  function calculateSquare(a: string, b: string): number {
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);

    // Простая валидация: если введены не числа, возвращаем 0
    if (isNaN(parsedA) || !parsedB) return 0;

    return parsedA * parsedB;
  }

  // Обработчик клика по кнопке «Вычислить»
  function handleCalculate(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();

    const result = calculateSquare(sideA, sideB);
    setArea(result.toString()); // Записываем результат в стейт площади
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Пример 11</h2>
      <h3>Вычисление площади прямоугольника</h3>

      <form name="form1">
        <div>
          <label>
            Сторона a:{' '}
            <input
              type="number"
              name="a"
              value={sideA}
              onChange={(e) => setSideA(e.target.value)}
            />
          </label>
        </div>
        <br />

        <div>
          <label>
            Сторона b:{' '}
            <input
              type="number"
              name="b"
              value={sideB}
              onChange={(e) => setSideB(e.target.value)}
            />
          </label>
        </div>
        <br />

        <div>
          <label>
            Площадь:{' '}
            <input
              type="text"
              name="s"
              value={area}
              readOnly // Запрещаем пользователю редактировать поле результата вручную
              placeholder="Нажмите вычислить"
            />
          </label>
        </div>
        <br />

        <input type="button" value="Вычислить" onClick={handleCalculate} />
      </form>
    </div>
  );
}
