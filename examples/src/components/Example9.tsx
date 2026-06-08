import React, { useState } from 'react';

import { handleMonthChange } from '../utils/example9';

export function Example9() {
  // Инициализируем значением '12' (Декабрь)
  const [selectedMonth, setSelectedMonth] = useState<string>('12');
  const [monthName, setMonthName] = useState<string>('Декабрь');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h2>Пример 9</h2>
      <hr />

      <p style={{ fontSize: '14px', color: '#666' }}>
        Вместо ручного ввода используется безопасный выбор через выпадающий список.
      </p>

      {/* Интерактивный выпадающий список */}
      <div style={{ margin: '20px 0', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label htmlFor="month-select">Выберите номер месяца:</label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => handleMonthChange(e, setSelectedMonth, setMonthName)}
          style={{ padding: '5px', fontSize: '14px' }}
        >
          {/* Генерируем опции от 1 до 12 */}
          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Область вывода результата (вместо document.write) */}
      <div
        style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#fff8e1',
          borderLeft: '4px solid #ffb300',
          borderRadius: '4px',
        }}
      >
        <span>Выбранный месяц: </span>
        <strong style={{ fontSize: '16px', color: '#b78103' }}>{monthName}</strong>
      </div>
    </div>
  );
}
