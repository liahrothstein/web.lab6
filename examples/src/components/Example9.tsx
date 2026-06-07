import React, { useState } from 'react';

export function Example9() {
  // Инициализируем значением '12' (Декабрь)
  const [selectedMonth, setSelectedMonth] = useState<string>('12');
  const [monthName, setMonthName] = useState<string>('Декабрь');

  function handleMonthChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    setSelectedMonth(value);

    const n: number = parseInt(value, 10);

    let result: string;
    switch (n) {
      case 1:
        result = 'Январь';
        break;
      case 2:
        result = 'Февраль';
        break;
      case 3:
        result = 'Март';
        break;
      case 4:
        result = 'Апрель';
        break;
      case 5:
        result = 'Май';
        break;
      case 6:
        result = 'Июнь';
        break;
      case 7:
        result = 'Июль';
        break;
      case 8:
        result = 'Август';
        break;
      case 9:
        result = 'Сентябрь';
        break;
      case 10:
        result = 'Октябрь';
        break;
      case 11:
        result = 'Ноябрь';
        break;
      case 12:
        result = 'Декабрь';
        break;
      default:
        result = 'Месяц не определен';
    }

    setMonthName(result);
  }

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
          onChange={handleMonthChange}
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
