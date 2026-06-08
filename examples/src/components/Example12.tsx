import React, { useState } from 'react';

import type { FormData } from '../utils/example12';
import { handleChange, handleReset, handleSubmit, initialFormState } from '../utils/example12';

export function Example12() {
  // Стейт для хранения данных формы
  const [formData, setFormData] = useState<FormData>(initialFormState);

  // Стейт для хранения ошибок валидации
  const [error, setError] = useState<string>('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h3>Пример 12</h3>

      {/* Вывод ошибки, если она есть */}
      {error && (
        <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>⚠️ {error}</div>
      )}

      <form onSubmit={(e) => handleSubmit(e, setError, formData)} name="mail">
        <div>
          <label>
            Имя:
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e, setFormData)}
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <br />

        <div>
          <label>
            E-mail:
            <br />
            <input
              type="email" // Меняем text на email для встроенной валидации браузера
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, setFormData)}
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <br />

        <div>
          <label>
            URL сайта:
            <br />
            <input
              type="url" // Меняем text на url для базовой проверки формата ссылки
              name="url"
              value={formData.url}
              onChange={(e) => handleChange(e, setFormData)}
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <br />

        <div>
          <label>
            Сообщение:
            <br />
            <textarea
              rows={6}
              cols={20}
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e, setFormData)}
              style={{ width: '100%', resize: 'vertical' }}
            />
          </label>
        </div>
        <br />

        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="submit" value="Отправить" />
          <input
            type="button"
            value="Очистить"
            onClick={() => handleReset(setFormData, setError)}
          />
        </div>
      </form>
    </div>
  );
}
