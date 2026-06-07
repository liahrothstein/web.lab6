import React, { useState } from 'react';

export function Example7() {
  // Инициализируем стейты дефолтными значениями из оригинального примера: n = 2, grade = 3
  const [baseInput, setBaseInput] = useState<string>('2');
  const [powerInput, setPowerInput] = useState<string>('3');

  // Стейты для хранения вычисленных значений для рендеринга строки результата
  const [displayBase, setDisplayBase] = useState<number | null>(null);
  const [displayPower, setDisplayPower] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  function handleCalculatePower(): void {
    setError('');

    const n: number = parseInt(baseInput, 10);
    let grade: number = parseInt(powerInput, 10);

    // Валидация входных данных
    if (isNaN(n) || !Number.isInteger(n) || isNaN(grade) || !Number.isInteger(grade)) {
      setError('Пожалуйста, введите корректные целые числа.');
      return;
    }

    // Сохраняем исходные значения для вывода на экран (аналог var buf = grade)
    const originalBase = n;
    const originalPower = grade;

    let calculationResult = 1;

    if (n === 0) {
      calculationResult = 0;
    } else if (n !== 0 && grade === 0) {
      calculationResult = 1;
    } else {
      // Если степень отрицательная, превращаем её в положительную (как в оригинальном скрипте)
      if (grade < 0) {
        grade *= -1;
      }

      // Вычисление степени с помощью цикла while
      while (grade > 0) {
        calculationResult *= n;
        grade--;
      }
    }

    // Обновляем стейты отображения результатов
    setDisplayBase(originalBase);
    setDisplayPower(originalPower);
    setResult(calculationResult);
  }

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
          onClick={handleCalculatePower}
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
