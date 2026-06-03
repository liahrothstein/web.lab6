const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("--- Расчет угла броска тела к горизонту ---");

  // Запрос начальной скорости V0 (м/с)
  const inputV0 = await askQuestion("Введите начальную скорость V0 (м/с): ");
  const v0 = parseFloat(inputV0);

  // Запрос полного времени полета t (с)
  const inputT = await askQuestion("Введите полное время полета t (с): ");
  const t = parseFloat(inputT);

  console.log(`---`);

  // Валидация входных данных
  if (isNaN(v0) || isNaN(t) || v0 <= 0 || t <= 0) {
    console.error(
      "Ошибка! Скорость и время должны быть положительными числами.",
    );
    rl.close();
    return;
  }

  const g = 9.81; // Ускорение свободного падения (м/с^2)

  // Вычисление синуса угла по формуле: sin(alpha) = (g * t) / (2 * v0)
  const sinAlpha = (g * t) / (2 * v0);

  // Ограничение для синуса: значение не может быть больше 1
  if (sinAlpha > 1) {
    console.error("Ошибка! С данными параметрами полет физически невозможен.");
    console.error(
      `Полученный sin(α) = ${sinAlpha.toFixed(4)}, что больше 1. Проверьте корректность V0 и t.`,
    );
  } else {
    // Вычисление угла в радианах и перевод в градусы
    const alphaRadians = Math.asin(sinAlpha);
    const alphaDegrees = alphaRadians * (180 / Math.PI);

    console.log(
      `При начальной скорости V0 = ${v0} м/с и времени полета t = ${t} с:`,
    );
    console.log(`Значение sin(α) = ${sinAlpha.toFixed(4)}`);
    console.log(`Угол броска к горизонту α = ${alphaDegrees.toFixed(2)}°`);
  }

  rl.close();
}

main();
