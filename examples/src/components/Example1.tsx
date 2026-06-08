import React, { useEffect } from 'react';

import { handleButtonClick, handleLinkClick, triggerExternalAlert } from '../utils/example1';

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
