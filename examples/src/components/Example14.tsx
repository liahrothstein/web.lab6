import React, { useEffect, useState } from 'react';

import { formatCurrentDate } from '../utils/example14';

export function Example14() {
  // Стейт для хранения отформатированной строки даты
  const [currentDateStr, setCurrentDateStr] = useState<string>('');

  // Эффект для инициализации и обновления таймера
  useEffect(() => {
    // 1. Сразу устанавливаем начальное значение при монтировании
    setCurrentDateStr(formatCurrentDate());

    // 2. Запускаем интервал каждую секунду (1000 мс)
    const intervalId = setInterval(() => {
      setCurrentDateStr(formatCurrentDate());
    }, 1000);

    /*
      3. Функция очистки (cleanup).
      Когда компонент удалится с экрана, интервал сбросится и не будет течь память.
    */
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
