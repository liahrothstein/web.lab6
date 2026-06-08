import React, { useEffect, useState } from 'react';

import { handleField1Change, handleSubmit } from '../utils/example10';

export function Example10() {
  const [field1, setField1] = useState<string>('');
  const [field2, setField2] = useState<string>('');

  // Состояние для безопасного вывода сообщений на экран вместо alert
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    // Для загрузки страницы alert использовать можно, так как он срабатывает один раз
    alert('Добро пожаловать на эту замечательную страницу');
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Пример 10</h1>

      {/* Вывод уведомлений прямо на страницу */}
      {notification && (
        <div
          style={{
            padding: '10px',
            background: '#e0f7fa',
            marginBottom: '10px',
            borderRadius: '4px',
          }}
        >
          ℹ️ <strong>Уведомление:</strong> {notification}
        </div>
      )}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert('Событие Click');
        }}
      >
        Ссылка
      </a>

      <br />
      <br />

      <form onSubmit={handleSubmit} name="form1">
        <div>
          <label>
            Поле1:{' '}
            <input
              type="text"
              name="field1"
              value={field1}
              onChange={(e) => handleField1Change(e, setField1, setField2)}
              // Заменяем alert на безопасное обновление состояния
              onFocus={() => setNotification('Выбрано первое поле')}
            />
          </label>
        </div>

        <br />

        <div>
          <label>
            Поле2:{' '}
            <input
              type="text"
              name="field2"
              value={field2}
              onChange={(e) => setField2(e.target.value)}
              // Заменяем alert на безопасное обновление состояния
              onFocus={() => setNotification('Выбрано второе поле')}
            />
          </label>
        </div>

        <br />
        <input type="submit" value="Кнопка submit" />
      </form>

      <br />
      <br />

      <a
        href="#"
        onMouseEnter={() => alert('Событие MouseOver')} // Тут alert безопасен, так как mouseenter не зависит от фокуса
        onClick={(e) => e.preventDefault()}
      >
        Подведите сюда курсор
      </a>
    </div>
  );
}
