import React, { useEffect } from 'react';

import { triggerExternalAlert } from '../utils/example1';

// Обработчик для клика по ссылке
function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>): void {
  e.preventDefault(); // Отменяем стандартное поведение ссылки (переход по #)
  alert('Привет! Я alert, который расположен внутри ссылки');
}

// Обработчик для кнопки с вводом имени
function handleButtonClick(): void {
  // prompt может вернуть string или null (если пользователь нажал "Отмена")
  const name: string | null = prompt('Введите ваше имя', 'Андрей');

  if (name !== null && name.trim() !== '') {
    alert(`Привет, ${name}!`);
  } else if (name === '') {
    alert('Привет, незнакомец!');
  }
}

export function Example1() {
  // useEffect с пустым массивом зависимостей [] срабатывает ОДИН РАЗ при монтировании компонента
  useEffect(() => {
    // Сначала сработает алерт, который встроен в "страницу"
    alert('Привет! Я alert, который расположен внутри страницы');

    // Затем вызов логики "внешнего" файла
    triggerExternalAlert();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Пример 1</h1>
      <div style={{ marginBottom: '15px' }}>
        <a href="#" onClick={handleLinkClick}>
          Нажми на меня
        </a>
      </div>
      <div>
        <input type="button" value="Ваше имя" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
