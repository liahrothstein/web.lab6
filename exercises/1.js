const readline = require("readline");

// Настройка интерфейса ввода-вывода в консоли
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Запрос у пользователя значение x
rl.question("Введите вещественное число x: ", (input) => {
  const x = parseFloat(input);

  // 1. Проверка, является ли введенное значение числом
  if (isNaN(x)) {
    console.error("Ошибка! Введенное значение не является числом.");
  } else {
    // 2. Вычисление знаменателя (обращается в ноль при x = 2 и x = 6)
    const denominator = x * x - 8 * x + 12;

    if (denominator === 0) {
      console.error(
        `Ошибка! При x = ${x} знаменатель равен нулю (деление на ноль невозможно).`,
      );
    } else {
      // 3. Вычисление числителя и итогового результата
      const numerator = x * x - 7 * x + 10;
      const result = numerator / denominator;

      console.log(`---`);
      console.log(`Результат вычисления выражения: ${result}`);
    }
  }

  // Закрытие интерфейса ввода, чтобы завершить работу программы
  rl.close();
});
