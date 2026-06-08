import React, { useState } from 'react';

import { handleCheckAge, withoutParentheses, withParentheses } from '../utils/example3';

export function Example3() {
  /*
    Состояние для хранения ответа пользователя из окна confirm
    null — пользователь еще не нажал кнопку, boolean — системный ответ true/false
  */
  const [isOver18, setIsOver18] = useState<boolean | null>(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <h2>Пример 3</h2>
      <hr />

      {/* Вывод математических выражений */}
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
      >
        <div>{withParentheses}</div>
        <div>{withoutParentheses}</div>
      </div>

      {/* Интерактивная часть с confirm */}
      <div style={{ marginTop: '15px' }}>
        <button
          onClick={() => handleCheckAge(setIsOver18)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Проверить возраст через confirm()
        </button>
      </div>

      {/* 3 & 4. Обработка и вывод результата на экран (Условный рендеринг) */}
      <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        {isOver18 === null && (
          <p style={{ color: 'gray' }}>Пожалуйста, пройдите проверку возраста.</p>
        )}

        {isOver18 === true && (
          <p>
            Вам <strong>больше</strong> 18 лет!
          </p>
        )}

        {isOver18 === false && (
          <p>
            Вам <strong>меньше</strong> 18 лет!
          </p>
        )}
      </div>
    </div>
  );
}
