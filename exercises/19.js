const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите строку текста: ", (inputString) => {
  if (!inputString) {
    console.log("---");
    console.log("Вы ввели пустую строку.");
    rl.close();
    return;
  }

  // Set (коллекция уникальных значений)
  // Разворот строки в массив символов, создание Set'а и сбор обратно через join
  const uniqueViaSet = [...new Set(inputString)].join("");

  console.log(`---`);
  console.log(`Исходная строка: "${inputString}"`);
  console.log(`Результат (Set):   "${uniqueViaSet}"`);

  rl.close();
});
