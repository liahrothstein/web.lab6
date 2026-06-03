const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите количество элементов ряда Фибоначчи (n): ", (inputN) => {
  const n = parseInt(inputN);

  console.log(`---`);

  // Валидация входных данных
  if (isNaN(n) || n <= 0) {
    console.error(
      "Ошибка! Количество элементов должно быть целым положительным числом.",
    );
    rl.close();
    return;
  }

  const fibonacciRow = [];

  // Генерирация ряда в зависимости от запрошенного количества элементов n
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacciRow.push(0); // Первый элемент последовательности
    } else if (i === 1) {
      fibonacciRow.push(1); // Второй элемент последовательности
    } else {
      // Каждое последующее число равно сумме двух предыдущих
      const nextNum = fibonacciRow[i - 1] + fibonacciRow[i - 2];
      fibonacciRow.push(nextNum);
    }
  }

  console.log(`Ряд Фибоначчи из ${n} элементов:`);
  console.log(fibonacciRow.join(", "));

  rl.close();
});
