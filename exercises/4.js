const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите строку (длиной не менее 20 символов): ", (inputString) => {
  // Проверка, соответствует ли длина строки условию
  if (inputString.length < 20) {
    console.error(
      `Ошибка! Длина введенной строки всего ${inputString.length} симв. Программа требует не менее 20 символов.`,
    );
  } else {
    // Извлечение 5-го символа строки
    const targetChar = inputString[4];

    let count = 0;

    // Обрезка строки до 20 символов
    const stringToAnalyze = inputString.slice(0, 20);

    // Подсчет, сколько раз встречается этот символ
    for (let i = 0; i < stringToAnalyze.length; i++) {
      if (stringToAnalyze[i] === targetChar) {
        count++;
      }
    }

    console.log(`---`);
    console.log(`Анализируемая строка (первые 20 симв.): "${stringToAnalyze}"`);
    console.log(`5-й по счету символ (индекс 4): "${targetChar}"`);
    console.log(`Количество его повторений в этой строке: ${count}`);
  }

  rl.close();
});
