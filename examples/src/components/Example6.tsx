import React, { useState } from 'react';

import { handleCalculateFactorial } from '../utils/example6';

export function Example6() {
  // Инициализируем стейт значением '5'
  const [inputValue, setInputValue] = useState<string>('5');
  // Стейт для хранения результата вывода строки на экран
  const [resultMessage, setResultMessage] = useState<string>('');

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
          onClick={() => handleCalculateFactorial(inputValue, setResultMessage)}
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
