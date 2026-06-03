console.log("--- Табулирование функции Y = 4 * SIN(T) - 0.5 * SIN(T) ---");
console.log("---------------------------------------------------------");
console.log("|    Параметр T    |               Значение Y           |");
console.log("---------------------------------------------------------");

const start = 0.1;
const end = 0.8;
const step = 0.05;

// Перебор значений T от 0.1 до 0.8 с шагом 0.05
// Добавление step / 2 к конечной точке, чтобы из-за погрешности плавающей точки не потерялось последнее значение (0.8)
for (let t = start; t <= end + step / 2; t += step) {
  // Вычисление значения функции. В JS встроенная функция синуса — Math.sin()
  const y = 4 * Math.sin(t) - 0.5 * Math.sin(t);

  // Форматирование вывода
  const tFormatted = t.toFixed(2).padStart(16);
  const yFormatted = y.toFixed(5).padEnd(30);

  console.log(`| ${tFormatted} | ${yFormatted} |`);
}

console.log("---------------------------------------------------------");
