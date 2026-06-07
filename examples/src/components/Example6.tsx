import React, { useState } from 'react';

export function Example6() {
  // Инициализируем стейт значением '5'
  const [inputValue, setInputValue] = useState<string>('5');
  // Стейт для хранения результата вывода строки на экран
  const [resultMessage, setResultMessage] = useState<string>('');

  const handleCalculateFactorial = (): void => {
    let n: number = parseInt(inputValue, 10);

    // Валидация: если введено не число
    if (isNaN(n)) {
      setResultMessage('Пожалуйста, введите корректное целое число.');
      return;
    }

    // Сохраняем исходное значение для вывода (аналог var buf = n)
    const buf: number = n;

    // Защита от отрицательных чисел, как в оригинале (if (n < 0) n *= -1)
    if (n < 0) {
      n *= -1;
    }

    let factorial: number = 1;

    // Вычисление факториала через цикл do...while
    // Цикл гарантированно выполнится хотя бы один раз (для 0! или 1! вернет 1)
    do {
      if (n === 0) break; // Для нуля факториал равен 1, выходим из цикла
      factorial *= n;
      n--;
    } while (n > 0);

    // Формируем результирующую строку (аналог document.write)
    setResultMessage(`Факториал ${buf}! равен ${factorial}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '450px' }}>
      <h2>Пример 6</h2>
      <hr />

      <h3>Вычисление факториала</h3>

      <p style={{ fontSize: '14px', color: '#666' }}>
        Используется цикл <code>do...while</code>. Отрицательные числа автоматически преобразуются в
        положительные.
      </p>

      <div style={{ margin: '20px 0', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label htmlFor="factorial-input">Введите целое число:</label>
        <input
          id="factorial-input"
          type="text"
          size={5}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          style={{ padding: '4px', textAlign: 'center' }}
        />
        <button
          onClick={handleCalculateFactorial}
          style={{ padding: '5px 12px', cursor: 'pointer' }}
        >
          Вычислить
        </button>
      </div>

      {/* Вывод результата на экран */}
      {resultMessage && (
        <div
          style={{
            marginTop: '15px',
            padding: '12px',
            backgroundColor: '#eef9ff',
            borderLeft: '4px solid #007acc',
            fontFamily: 'monospace',
            fontSize: '15px',
          }}
        >
          {resultMessage}
        </div>
      )}
    </div>
  );
}
