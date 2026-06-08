/*
    Списки месяцев и дней недели выносим за пределы компонента,
    чтобы они не пересоздавались при каждом рендере.
*/
const MONTHS: string[] = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];

const DAY_NAMES: string[] = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

// Функция для сборки красивой строки даты (аналог getCurrentDate)
export function formatCurrentDate(): string {
  const date = new Date();

  const dayName = DAY_NAMES[date.getDay()]; // В JS 0 - это Воскресенье
  const dayOfMonth = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  // Добавляем ведущие нули
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Сегодня ${dayName}, ${dayOfMonth} ${month} ${year} г., ${hours} ч. ${minutes} мин. ${seconds} сек.`;
}
