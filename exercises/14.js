const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("--- Проверка принадлежности точки кругу ---");

  // Запрос параметров круга
  const inputXc = await askQuestion("Введите координату Xс центра круга: ");
  const xc = parseFloat(inputXc);

  const inputYc = await askQuestion("Введите координату Yс центра круга: ");
  const yc = parseFloat(inputYc);

  const inputR = await askQuestion("Введите радиус круга R: ");
  const r = parseFloat(inputR);

  // 2. Запрашиваем координаты проверяемой точки
  const inputX = await askQuestion("Введите координату X точки: ");
  const x = parseFloat(inputX);

  const inputY = await askQuestion("Введите координату Y точки: ");
  const y = parseFloat(inputY);

  console.log(`---`);

  // Валидация входных данных
  if ([xc, yc, r, x, y].some(isNaN)) {
    console.error("Ошибка! Все введенные значения должны быть числами.");
    rl.close();
    return;
  }

  if (r < 0) {
    console.error("Ошибка! Радиус круга не может быть отрицательным.");
    rl.close();
    return;
  }

  // Вычисление квадрата расстояния от точки (X, Y) до центра (Xc, Yc)
  // Формула: d^2 = (X - Xc)^2 + (Y - Yc)^2
  const dx = x - xc;
  const dy = y - yc;
  const squaredDistance = dx * dx + dy * dy;
  const squaredRadius = r * r;

  // Проверка условия нахождения внутри круга
  if (squaredDistance <= squaredRadius) {
    console.log(
      `Точка (${x}; ${y}) ОТНОСИТСЯ к кругу с центром (${xc}; ${yc}) и радиусом ${r}.`,
    );
  } else {
    console.log(
      `Точка (${x}; ${y}) НЕ ОТНОСИТСЯ к кругу с центром (${xc}; ${yc}) и радиусом ${r}.`,
    );
  }

  rl.close();
}

main();
