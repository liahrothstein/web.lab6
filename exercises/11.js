const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите строку текста: ", (inputString) => {
  // Очистка строки от знаков препинания
  // Регулярное выражение удаляет точки, запятые, дефисы, восклицательные/вопросительные знаки и т.д.
  const cleanString = inputString.replace(
    /[.,\/#!$%\^&\*;:{}=\-_`~()?"«»]/g,
    " ",
  );

  // Разбивка строки по одному или нескольким пробелам (\s+) и удаление пустых элементов
  const words = cleanString
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Проверка, есть ли вообще слова во введенном тексте
  if (words.length === 0) {
    console.log("---");
    console.log("Во введенной строке не найдено ни одного слова.");
    rl.close();
    return;
  }

  // Инициализация переменных для поиска экстремумов
  let maxWord = words[0];
  let minWord = words[0];
  let totalLength = 0;

  // Перебор массива слов для расчета характеристик
  for (const word of words) {
    totalLength += word.length;

    if (word.length > maxWord.length) {
      maxWord = word;
    }
    if (word.length < minWord.length) {
      minWord = word;
    }
  }

  // Вычисление средней длины слова
  const averageLength = totalLength / words.length;

  // Вывод результата анализа в консоль
  console.log(`---`);
  console.log(`Количество слов во введенной строке: ${words.length}`);
  console.log(
    `Максимальное слово: "${maxWord}" (длина: ${maxWord.length} симв.)`,
  );
  console.log(
    `Минимальное слово: "${minWord}" (длина: ${minWord.length} симв.)`,
  );
  console.log(`Средняя длина слов: ${averageLength.toFixed(2)} симв.`);

  rl.close();
});
