import React, { useState } from 'react';

export function Example3() {
  // 1. Демонстрация сложения без присваивания переменным
  // В скобках: сначала выполнится сложение (3 + 6 = 9), затем конкатенация строк
  const withParentheses: string = 'Сложим два числа 3 и 6 без присвоения их переменным: ' + (3 + 6);

  // Без скобок: сработает левоассоциативность, и числа 3 и 6 превратятся в строки "3" и "6"
  const withoutParentheses: string = 'Без скобок: ' + 3 + 6;

  // 2. Состояние для хранения ответа пользователя из окна confirm
  // null — пользователь еще не нажал кнопку, boolean — системный ответ true/false
  const [isOver18, setIsOver18] = useState<boolean | null>(null);

  // Функция обработки клика по кнопке опроса
  function handleCheckAge(): void {
    // Встроенный метод confirm() возвращает true (OK) или false (Отмена)
    const userChoice: boolean = confirm('Вам больше 18 лет?');
    setIsOver18(userChoice);
  }

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
        <button onClick={handleCheckAge} style={{ padding: '8px 16px', cursor: 'pointer' }}>
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
