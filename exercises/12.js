const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите строку для проверки на палиндром: ", (inputString) => {
  // Приведение строки к нижнему регистру и удаление всех пробелов
  const cleanedString = inputString.toLowerCase().replace(/\s+/g, "");

  if (!cleanedString) {
    console.log("---");
    console.log("Вы ввели пустую строку.");
    rl.close();
    return;
  }

  // Разворот строки задом наперед
  // split('') разбивает на массив символов, reverse() переворачивает массив, join('') собирает обратно в строку
  const reversedString = cleanedString.split("").reverse().join("");

  console.log(`---`);
  console.log(`Исходная строка: "${inputString}"`);

  // Сравнение очищенной оригинальной строки с перевернутой
  if (cleanedString === reversedString) {
    console.log("Результат: Строка ЯВЛЯЕТСЯ палиндромом.");
  } else {
    console.log("Результат: Строка НЕ ЯВЛЯЕТСЯ палиндромом.");
  }

  rl.close();
});
