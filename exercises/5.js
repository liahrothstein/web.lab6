const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Утилита для удобного последовательного опроса в консоли через колбэки
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  // 1. Ввод первого числа
  const inputX = await askQuestion("Введите первое положительное число (x): ");
  const x = parseFloat(inputX);

  // 2. Ввод второго числа
  const inputY = await askQuestion("Введите второе положительное число (y): ");
  const y = parseFloat(inputY);

  // Валидация чисел на то, что они являются положительными числами
  if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
    console.error(
      "Ошибка! Числа x и y должны быть вещественными и положительными.",
    );
    rl.close();
    return;
  }

  // 3. Вывод меню и ввод номера действия
  console.log("\nДоступные действия:");
  console.log("1 - Сложение (+)");
  console.log("2 - Вычитание (-)");
  console.log("3 - Умножение (*)");
  console.log("4 - Деление (/)");

  const operation = await askQuestion("Введите номер действия (1-4): ");

  console.log(`---`);
  let result;

  // 4. Обработка выбранного действия с помощью оператора выбора switch
  switch (parseInt(operation)) {
    case 1:
      result = x + y;
      console.log(`Результат сложения (${x} + ${y}) = ${result}`);
      break;
    case 2:
      result = x - y;
      console.log(`Результат вычитания (${x} - ${y}) = ${result}`);
      break;
    case 3:
      result = x * y;
      console.log(`Результат умножения (${x} * ${y}) = ${result}`);
      break;
    case 4:
      result = x / y;
      console.log(`Результат деления (${x} / ${y}) = ${result}`);
      break;
    default:
      console.error("Ошибка! Неверный номер действия. Выберите от 1 до 4.");
      break;
  }

  rl.close();
}

main();
