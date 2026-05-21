const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ввод фамилии пользователя
rl.question("Введите вашу фамилию: ", (lastName) => {
  // Определение набора гласных и согласных букв (русские и английские)
  const vowels = new Set("аеёиоуыэюяaeiouy");
  const consonants = new Set("бвгджзйклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz");

  let vowelCount = 0;
  let consonantCount = 0;

  // Приведение строки к нижнему регистру и перебор каждого символа
  for (const char of lastName.toLowerCase()) {
    if (vowels.has(char)) {
      vowelCount++;
    } else if (consonants.has(char)) {
      consonantCount++;
    }
  }

  // Вывод результата в консоль
  console.log(`---`);
  console.log(`Анализ фамилии: "${lastName}"`);
  console.log(`Количество гласных: ${vowelCount}`);
  console.log(`Количество согласных: ${consonantCount}`);

  rl.close();
});
