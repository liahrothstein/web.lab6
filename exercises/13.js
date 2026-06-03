const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите адрес электронной почты: ", (email) => {
  const trimmedEmail = email.trim();
  let isValid = true;
  const errors = [];

  // Проверка на наличие символа «@»
  const atIndex = trimmedEmail.indexOf("@");
  if (atIndex === -1) {
    errors.push("Ошибка: отсутствует символ «@».");
    isValid = false;
  }

  // Проверка на минимальный размер адреса — 6 символов
  if (trimmedEmail.length < 6) {
    errors.push(
      `Ошибка: минимальная длина адреса — 6 символов (сейчас: ${trimmedEmail.length}).`,
    );
    isValid = false;
  }

  // Если символа '@' нет, дальнейшие специфические проверки делать бессмысленно
  if (atIndex !== -1) {
    // Слева от символа «@» должен быть, как минимум, один символ
    if (atIndex < 1) {
      errors.push(
        "Ошибка: слева от символа «@» должен быть как минимум один символ.",
      );
      isValid = false;
    }

    const domainPart = trimmedEmail.slice(atIndex + 1);
    const firstDotInDomainIndex = domainPart.indexOf(".");
    const lastDotIndex = trimmedEmail.lastIndexOf(".");

    // Справа от символа «@» должна быть, как минимум, одна точка
    if (firstDotInDomainIndex === -1) {
      errors.push(
        "Ошибка: справа от символа «@» должна быть как минимум одна точка.",
      );
      isValid = false;
    } else {
      // Между символом «@» и следующей за ним точкой должен быть, как минимум, один символ
      if (firstDotInDomainIndex < 1) {
        errors.push(
          "Ошибка: между символом «@» и следующей за ним точкой должен быть как минимум один символ.",
        );
        isValid = false;
      }
    }

    // Справа от последней точки должно быть, как минимум, 2 символа
    if (lastDotIndex === -1 || trimmedEmail.length - 1 - lastDotIndex < 2) {
      errors.push(
        "Ошибка: справа от последней точки должно быть как минимум 2 символа.",
      );
      isValid = false;
    }
  }

  // Вывод результатов
  console.log(`---`);
  if (isValid) {
    console.log(
      `Адрес "${trimmedEmail}" корректен и успешно прошел все проверки.`,
    );
  } else {
    console.log(`Адрес "${trimmedEmail}" содержит ошибки валидации:`);
    errors.forEach((err) => console.log(` - ${err}`));
  }

  rl.close();
});
