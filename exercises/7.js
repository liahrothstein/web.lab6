const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("--- Расчет эквивалентного сопротивления цепи ---");

  // Запрос сопротивления первого проводника R1
  const inputR1 = await askQuestion("Введите сопротивление R1 (Ом): ");
  const r1 = parseFloat(inputR1);

  // Запрос сопротивления второго проводника R2
  const inputR2 = await askQuestion("Введите сопротивление R2 (Ом): ");
  const r2 = parseFloat(inputR2);

  console.log(`---`);

  // Валидация: сопротивление физически не может быть отрицательным числом
  if (isNaN(r1) || isNaN(r2) || r1 < 0 || r2 < 0) {
    console.error(
      "Ошибка! Сопротивления R1 и R2 должны быть неотрицательными вещественными числами.",
    );
    rl.close();
    return;
  }

  // Расчет для последовательного соединения: R_экв = R1 + R2
  const serialResistance = r1 + r2;
  console.log(
    `При последовательном соединении: R_экв = ${serialResistance.toFixed(2)} Ом`,
  );

  // Расчет для параллельного соединения: R_экв = (R1 * R2) / (R1 + R2)
  if (r1 + r2 === 0) {
    console.log(
      "При параллельном соединении: Оба проводника равны 0 Ом (короткое замыкание), эквивалентное сопротивление вычислить нельзя.",
    );
  } else {
    const parallelResistance = (r1 * r2) / (r1 + r2);
    console.log(
      `При параллельном соединении: R_экв = ${parallelResistance.toFixed(2)} Ом`,
    );
  }

  rl.close();
}

main();
