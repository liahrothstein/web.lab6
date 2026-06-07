import React, { useState } from 'react';

// Описываем интерфейс для структуры данных формы
interface FormData {
  name: string;
  email: string;
  url: string;
  message: string;
}

export function Example12() {
  // Начальное пустые значения формы
  const initialFormState: FormData = {
    name: '',
    email: '',
    url: '',
    message: '',
  };

  // Стейт для хранения данных формы
  const [formData, setFormData] = useState<FormData>(initialFormState);

  // Стейт для хранения ошибок валидации
  const [error, setError] = useState<string>('');

  // Универсальный обработчик изменений для всех полей
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Функция валидации формы (аналог checkFields)
  function checkFields(data: FormData): boolean {
    // Проверяем, что все поля заполнены (удаляя лишние пробелы через trim)
    if (!data.name.trim() || !data.email.trim() || !data.url.trim() || !data.message.trim()) {
      setError('Пожалуйста, заполните все поля формы!');
      return false;
    }

    const hasDigits = /[0-9]/.test(data.name);
    if (hasDigits) {
      setError('Поле "Имя" не должно содержать цифры!');
      return false;
    }

    setError(''); // Если всё ок, убираем ошибку
    return true;
  }

  // Обработчик отправки формы (с использованием современного React.SubmitEvent)
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Вызываем функцию проверки
    if (checkFields(formData)) {
      alert('Форма успешно валидирована и отправлена!');
      // Здесь обычно происходит отправка данных на сервер (например, через fetch или axios)
      console.log('Отправленные данные:', formData);
    }
  }

  // Функция для кнопки "Очистить" (вместо type="reset")
  function handleReset() {
    setFormData(initialFormState);
    setError('');
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h3>Пример 12</h3>

      {/* Вывод ошибки, если она есть */}
      {error && (
        <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>⚠️ {error}</div>
      )}

      <form onSubmit={handleSubmit} name="mail">
        <div>
          <label>
            Имя:
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              style={{ width: '100%', resize: 'vertical' }}
            />
          </label>
        </div>
        <br />

        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="submit" value="Отправить" />
          <input type="button" value="Очистить" onClick={handleReset} />
        </div>
      </form>
    </div>
  );
}
