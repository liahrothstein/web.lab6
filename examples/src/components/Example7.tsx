import React, { useState } from 'react';

import { handleCalculatePower } from '../utils/example7';

export function Example7() {
  // Инициализируем стейты дефолтными значениями из оригинального примера: n = 2, grade = 3
  const [baseInput, setBaseInput] = useState<string>('2');
  const [powerInput, setPowerInput] = useState<string>('3');

  // Стейты для хранения вычисленных значений для рендеринга строки результата
  const [displayBase, setDisplayBase] = useState<number | null>(null);
  const [displayPower, setDisplayPower] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '450px' }}>
      <h2>Пример 7</h2>
      <hr />

      <p style={{ fontSize: '14px', color: '#666' }}>
        Вычисление производится с помощью цикла <code>while</code> на основе оригинального
        алгоритма.
      </p>

      {/* Интерфейс ввода данных */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' }}>
        <div>
          <label style={{ display: 'inline-block', width: '120px' }}>Введите число:</label>
          <input
            type="text"
            size={5}
            value={baseInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseInput(e.target.value)}
            style={{ padding: '4px', textAlign: 'center' }}
          />
        </div>

        <div>
          <label style={{ display: 'inline-block', width: '120px' }}>Введите степень:</label>
          <input
            type="text"
            size={5}
            value={powerInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPowerInput(e.target.value)}
            style={{ padding: '4px', textAlign: 'center' }}
          />
        </div>

        <button
          onClick={() =>
            handleCalculatePower(
              setError,
              setDisplayBase,
              setDisplayPower,
              setResult,
              baseInput,
              powerInput,
            )
          }
          style={{ padding: '6px 12px', cursor: 'pointer', marginTop: '5px', width: 'fit-content' }}
        >
          Возвести в степень
        </button>
      </div>

      {/* Вывод ошибок валидации */}
      {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

      {/* Вывод результата на экран (вместо document.write) */}
      {result !== null && !error && (
        <div
          style={{
            marginTop: '15px',
            padding: '12px',
            backgroundColor: '#f4fbf7',
            borderLeft: '4px solid #2e7d32',
            fontSize: '18px',
            fontFamily: 'serif',
          }}
        >
          <span>Результат: </span>
          <strong>
            {displayBase}
            <sup>{displayPower}</sup> = {result}
          </strong>
        </div>
      )}
    </div>
  );
}
