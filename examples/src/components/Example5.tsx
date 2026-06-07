import React, { useState } from 'react';

export function Example5() {
  // ==========================================
  // БЛОК 1: Сравнение статических переменных
  // ==========================================
  const a: number = 3;
  const b: number = 8;

  // Логика ветвления для определения знака сравнения
  let comparisonResult: string;
  if (a > b) {
    comparisonResult = 'a > b';
  } else {
    comparisonResult = 'a <= b';
  }

  // ==========================================
  // БЛОК 2: Форма проверки числа на четность
  // ==========================================
  // Инициализируем значением "2", как в оригинальном примере
  const [inputValue, setInputValue] = useState<string>('2');

  function handleCheckParity(): void {
    // Преобразуем строку из инпута в целое число
    const parsedNumber: number = parseInt(inputValue, 10);

    // Проверяем на NaN (на случай, если пользователь очистил поле или ввел буквы)
    if (isNaN(parsedNumber)) {
      alert('Пожалуйста, введите корректное число');
      return;
    }

    // Оператор % вычисляет остаток от деления на 2
    if (parsedNumber % 2 === 0) {
      alert('Четное');
    } else {
      alert('Нечетное');
    }
  }

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

        <button onClick={handleCheckParity} style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Четное или нечетное?
        </button>
      </div>
    </div>
  );
}
