const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("--- Вычисление сопротивления участка цепи ---");

  // Запрос напряжения
  const inputU = await askQuestion(
    "Введите напряжение на участке цепи (U, В): ",
  );
  const voltage = parseFloat(inputU);

  // Запрос силы тока
  const inputI = await askQuestion(
    "Введите силу тока на участке цепи (I, А): ",
  );
  const current = parseFloat(inputI);

  console.log(`---`);

  // Проверка на корректность ввода чисел
  if (isNaN(voltage) || isNaN(current)) {
    console.error("Ошибка! Введенные значения должны быть числами.");
  } else if (current === 0) {
    // Защита от деления на ноль
    console.error(
      "Ошибка! Сила тока не может быть равна нулю (деление на ноль невозможно).",
    );
  } else {
    // Расчет сопротивления по формуле R = U / I
    const resistance = voltage / current;

    console.log(
      `При напряжении U = ${voltage} В и силе тока I = ${current} А:`,
    );
    console.log(`Электрическое сопротивление R = ${resistance.toFixed(2)} Ом`);
  }

  rl.close();
}

main();
