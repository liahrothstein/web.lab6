const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Введите последовательность слов (через пробел): ",
  (inputString) => {
    if (!inputString.trim()) {
      console.log("Вы ввели пустую строку.");
      rl.close();
      return;
    }

    // Разбивка строки на массив слов, убирая лишние пробелы
    const words = inputString.trim().split(/\s+/);
    const processedWords = [];

    for (const word of words) {
      let firstAFound = false;
      let newWord = "";

      for (const char of word) {
        // Проверка как строчной, так и заглавной 'а'/'А'
        if (char.toLowerCase() === "а") {
          if (!firstAFound) {
            // Первая встречная буква 'а' заменяется на 'о' (сохраняя регистр)
            newWord += char === "А" ? "О" : "о";
            firstAFound = true;
          }
          // Все остальные буквы 'а' просто пропускаются (удаляются)
        } else {
          // Все остальные символы добавляются как есть
          newWord += char;
        }
      }

      processedWords.push(newWord);
    }

    console.log(`---`);
    console.log("Результат преобразования:");
    console.log(processedWords.join(" "));

    rl.close();
  },
);
