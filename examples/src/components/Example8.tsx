import React, { useState } from 'react';

import { handleCalculate } from '../utils/example8';

export function Example8() {
  // По умолчанию устанавливаем '5'
  const [inputValue, setInputValue] = useState<string>('5');
  const [resultMessage, setResultMessage] = useState<string>('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '450px' }}>
      <h2>Пример 8</h2>
      <hr />

      <p style={{ fontSize: '14px', color: '#666' }}>
        В данном примере вычисление факториала реализовано итеративно с помощью цикла{' '}
        <code>for</code>.
      </p>

      {/* Контролируемый инпут */}
      <div style={{ margin: '20px 0', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label htmlFor="for-factorial-input">Введите число n:</label>
        <input
          id="for-factorial-input"
          type="text"
          size={5}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          style={{ padding: '4px', textAlign: 'center' }}
        />
        <button
          onClick={() => handleCalculate(setResultMessage, inputValue)}
          style={{ padding: '5px 12px', cursor: 'pointer' }}
        >
          Вычислить
        </button>
      </div>

      {/* Область вывода результата */}
      {resultMessage && (
        <div
          style={{
            marginTop: '15px',
            padding: '12px',
            backgroundColor: '#faf5ff',
            borderLeft: '4px solid #9c27b0',
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
