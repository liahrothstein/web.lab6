import React, { useState } from 'react';

import { a, b, comparisonResult, handleCheckParity } from '../utils/example5';

export function Example5() {
  // Инициализируем значением "2"
  const [inputValue, setInputValue] = useState<string>('2');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
      <h2>Пример 5</h2>
      <hr />

      {/* Вывод статического сравнения */}
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
      >
        <h4>Результат сравнения при загрузке:</h4>
        <p style={{ fontFamily: 'monospace', margin: '5px 0' }}>
          a = {a}, b = {b}
        </p>
        <p style={{ fontWeight: 'bold', color: '#007acc', margin: '5px 0' }}>{comparisonResult}</p>
      </div>

      {/* Форма проверки на четность */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h4>Проверка числа на четность/нечетность</h4>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="parity-input" style={{ marginRight: '10px' }}>
            Введите число:
          </label>
          <input
            id="parity-input"
            type="text"
            size={5}
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
        </div>

        <button
          onClick={() => handleCheckParity(inputValue)}
          style={{ padding: '6px 12px', cursor: 'pointer' }}
        >
          Четное или нечетное?
        </button>
      </div>
    </div>
  );
}
