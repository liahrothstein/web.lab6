const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите количество элементов массива (n): ", (inputN) => {
  const n = parseInt(inputN);

  console.log(`---`);

  // Валидация входных данных
  if (isNaN(n) || n <= 0) {
    console.error(
      "Ошибка! Количество элементов должно быть положительным целым числом.",
    );
    rl.close();
    return;
  }

  const randomArray = [];
  let sum = 0;

  // Заполнение массива случайными числами от 0 до 10 включительно
  for (let i = 0; i < n; i++) {
    // Math.random() дает число от 0 (включительно) до 1 (исключительно)
    // Умножение на 11 и Math.floor() дают целые числа строго от 0 до 10
    const randomNum = Math.floor(Math.random() * 11);

    randomArray.push(randomNum);
    sum += randomNum;
  }

  // Вывод результатов в консоль
  console.log("Сгенерированный массив:");
  console.log(`[ ${randomArray.join(", ")} ]`);
  console.log(`---`);
  console.log(`Сумма всех элементов массива: ${sum}`);

  rl.close();
});
