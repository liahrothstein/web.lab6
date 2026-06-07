import React, { useEffect, useState } from 'react';

import { Car } from '../utils/example13';

export function Example13() {
  // Стейт, в котором мы будем хранить массив строк — логов действий машин
  const [logs, setLogs] = useState<string[]>([]);

  // Запускаем симуляцию один раз при загрузке компонента
  useEffect(() => {
    // Создаем экземпляры класса Car
    const car1 = new Car('ВАЗ 2109', 'красный', 1989);
    const car2 = new Car('Audi 100', 'коричневый', 1992);
    const car3 = new Car('Запорожец', 'розовый', 1980);

    // Собираем все вызовы методов в один массив строк (вместо document.write)
    const simulationResults = [
      car1.toString(),
      car2.toString(),
      car3.toString(),
      car2.go(87),
      car3.go(180),
      car1.go(142),
      car1.stop(),
      car3.signal(),
    ];

    // Сохраняем результаты в состояние
    setLogs(simulationResults);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6' }}>
      <h3>Пример 13</h3>

      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        {/* Рендерим каждую строчку лога */}
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
}
