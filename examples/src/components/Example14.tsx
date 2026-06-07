import React, { useEffect, useState } from 'react';

// Списки месяцев и дней недели выносим за пределы компонента,
// чтобы они не пересоздавались при каждом рендере.
const MONTHS: string[] = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];

const DAY_NAMES: string[] = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export function Example14() {
  // Стейт для хранения отформатированной строки даты
  const [currentDateStr, setCurrentDateStr] = useState<string>('');

  // Функция для сборки красивой строки даты (аналог getCurrentDate)
  function formatCurrentDate(): string {
    const date = new Date();

    const dayName = DAY_NAMES[date.getDay()]; // В JS 0 - это Воскресенье
    const dayOfMonth = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();

    // Добавляем ведущие нули для красоты (например, "05" вместо "5")
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Сегодня ${dayName}, ${dayOfMonth} ${month} ${year} г., ${hours} ч. ${minutes} мин. ${seconds} сек.`;
  }

  // Эффект для инициализации и обновления таймера
  useEffect(() => {
    // 1. Сразу устанавливаем начальное значение при монтировании
    setCurrentDateStr(formatCurrentDate());

    // 2. Запускаем интервал каждую секунду (1000 мс)
    const intervalId = setInterval(() => {
      setCurrentDateStr(formatCurrentDate());
    }, 1000);

    // 3. Функция очистки (cleanup).
    // Когда компонент удалится с экрана, интервал сбросится и не будет течь память.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Пример 14</h3>

      <form name="dateForm">
        <input
          type="text"
          name="time"
          value={currentDateStr}
          readOnly // Поле только для чтения, так как управляется системой
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '8px',
            fontFamily: 'monospace',
            fontSize: '14px',
          }}
        />
      </form>
    </div>
  );
}
