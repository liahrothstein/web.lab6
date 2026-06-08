export const triggerExternalAlert = (): void => {
  alert('Привет! Я alert, который расположен внутри отдельного файла');
};

// Обработчик для клика по ссылке
export function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>): void {
  e.preventDefault(); // Отменяем стандартное поведение ссылки (переход по #)
  alert('Привет! Я alert, который расположен внутри ссылки');
}

// Обработчик для кнопки с вводом имени
export function handleButtonClick(): void {
  // prompt может вернуть string или null (если пользователь нажал "Отмена")
  const name: string | null = prompt('Введите ваше имя', 'Андрей');

  if (name !== null && name.trim() !== '') {
    alert(`Привет, ${name}!`);
  } else if (name === '') {
    alert('Привет, незнакомец!');
  }
}
