// Задание массы трех гантелей
const mass1 = 5.5;
const mass2 = 12.0;
const mass3 = 8.2;

// 1. Сумма масс всех гантелей
const totalMass = mass1 + mass2 + mass3;

// 2. Самая тяжелая гантель
let heaviest = mass1;
if (mass2 > heaviest) {
  heaviest = mass2;
}
if (mass3 > heaviest) {
  heaviest = mass3;
}

// 3. Самая легкая гантель
let lightest = mass1;
if (mass2 < lightest) {
  lightest = mass2;
}
if (mass3 < lightest) {
  lightest = mass3;
}

// Вывод результатов в консоль
console.log(`Массы гантелей: ${mass1} кг, ${mass2} кг, ${mass3} кг`);
console.log(`---`);
console.log(`Сумма масс всех гантелей: ${totalMass} кг`);
console.log(`Самая тяжелая гантель: ${heaviest} кг`);
console.log(`Самая легкая гантель: ${lightest} кг`);
