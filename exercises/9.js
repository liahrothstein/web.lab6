// Получение текущего системного время
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

// Перевод времени в удобный числовой формат для точного сравнения
const currentTime = hours + minutes / 60;

// Форматирование вывода времени, добавляя ведущий ноль при необходимости
const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

console.log(`--- Контроль расписания ---`);
console.log(`Текущее время: ${formattedTime}`);
console.log(`---`);

// Проверка временных интервалов согласно условию
if (currentTime >= 7.0 && currentTime < 8.0) {
  console.log("Сейчас время ЗАВТРАКА (07:00 - 08:00).");
} else if (currentTime >= 13.0 && currentTime < 14.0) {
  console.log("Сейчас время ОБЕДА (13:00 - 14:00).");
} else if (currentTime >= 19.0 && currentTime < 20.0) {
  console.log("Сейчас время УЖИНА (19:00 - 20:00).");
} else if (currentTime >= 9.0 && currentTime < 18.0) {
  console.log("Сейчас рабочее время (РАБОТА) (09:00 - 18:00).");
} else if (currentTime >= 18.0 && currentTime < 23.0) {
  console.log("Сейчас время ОТДЫХА (18:00 - 23:00).");
} else if (currentTime >= 23.0 || currentTime < 6.5) {
  // Сон длится с 23:00 до 06:30 следующего дня
  console.log("Сейчас время СНА (23:00 - 06:30).");
} else {
  // Оставшийся промежуток с 6:30 до 7:00 (свободное время / подъем)
  console.log("Сейчас свободное время (подготовка к завтраку).");
}
