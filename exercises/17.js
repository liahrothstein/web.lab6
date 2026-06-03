const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Вспомогательная функция для перевода градусов в радианы
const toRadians = (degrees) => degrees * (Math.PI / 180);

async function main() {
  console.log("--- Расчет площади треугольника ---");
  console.log("1 - По длинам трех сторон (Формула Герона)");
  console.log("2 - По трем углам и стороне");
  console.log("3 - По двум сторонам и углу между ними");
  console.log("4 - По двум сторонам и необразованному ими углу");
  console.log("5 - По высоте и стороне, к которой она опущена");

  const choice = await askQuestion("\nВыберите способ расчета (1-5): ");
  console.log(`---`);

  switch (parseInt(choice)) {
    case 1: {
      // 1. По трем сторонам
      const a = parseFloat(await askQuestion("Введите сторону a: "));
      const b = parseFloat(await askQuestion("Введите сторону b: "));
      const c = parseFloat(await askQuestion("Введите сторону c: "));

      if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.error("Ошибка! Стороны должны быть положительными числами.");
      } else if (a + b <= c || a + c <= b || b + c <= a) {
        console.error(
          "Ошибка! Треугольник с такими сторонами не существует (нарушено неравенство треугольника).",
        );
      } else {
        const p = (a + b + c) / 2; // полупериметр
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        console.log(`Площадь треугольника: ${s.toFixed(2)}`);
      }
      break;
    }

    case 2: {
      // 2. По трем углам и стороне
      const a = parseFloat(await askQuestion("Введите известную сторону a: "));
      const alpha = parseFloat(
        await askQuestion("Введите прилежащий к ней угол Alpha (в градусах): "),
      );
      const beta = parseFloat(
        await askQuestion("Введите прилежащий к ней угол Beta (в градусах): "),
      );
      const gamma = parseFloat(
        await askQuestion("Введите противолежащий угол Gamma (в градусах): "),
      );

      if (
        [a, alpha, beta, gamma].some(isNaN) ||
        a <= 0 ||
        alpha <= 0 ||
        beta <= 0 ||
        gamma <= 0
      ) {
        console.error(
          "Ошибка! Все параметры должны быть положительными числами.",
        );
      } else if (Math.abs(alpha + beta + gamma - 180) > 0.01) {
        console.error(
          `Ошибка! Сумма углов треугольника должна быть равна 180° (у вас: ${alpha + beta + gamma}°).`,
        );
      } else {
        // Формула: S = (a^2 * sin(Beta) * sin(Gamma)) / (2 * sin(Alpha))
        const s =
          (a * a * Math.sin(toRadians(beta)) * Math.sin(toRadians(gamma))) /
          (2 * Math.sin(toRadians(alpha)));
        console.log(`Площадь треугольника: ${s.toFixed(2)}`);
      }
      break;
    }

    case 3: {
      // 3. По двум сторонам и углу между ними
      const a = parseFloat(await askQuestion("Введите сторону a: "));
      const b = parseFloat(await askQuestion("Введите сторону b: "));
      const gamma = parseFloat(
        await askQuestion("Введите угол между ними Gamma (в градусах): "),
      );

      if (
        isNaN(a) ||
        isNaN(b) ||
        isNaN(gamma) ||
        a <= 0 ||
        b <= 0 ||
        gamma <= 0
      ) {
        console.error("Ошибка! Введенные значения должны быть положительными.");
      } else if (gamma >= 180) {
        console.error("Ошибка! Угол в треугольнике должен быть меньше 180°.");
      } else {
        // Формула: S = 0.5 * a * b * sin(Gamma)
        const s = 0.5 * a * b * Math.sin(toRadians(gamma));
        console.log(`Площадь треугольника: ${s.toFixed(2)}`);
      }
      break;
    }

    case 4: {
      // 4. По двум сторонам и необразованному ими углу
      const a = parseFloat(
        await askQuestion(
          "Введите сторону a (противолежащую известному углу): ",
        ),
      );
      const b = parseFloat(await askQuestion("Введите вторую сторону b: "));
      const alpha = parseFloat(
        await askQuestion(
          "Введите угол Alpha (в градусах, напротив стороны a): ",
        ),
      );

      if (
        isNaN(a) ||
        isNaN(b) ||
        isNaN(alpha) ||
        a <= 0 ||
        b <= 0 ||
        alpha <= 0 ||
        alpha >= 180
      ) {
        console.error("Ошибка! Проверьте корректность введенных данных.");
        break;
      }

      const sinBeta = (b * Math.sin(toRadians(alpha))) / a;

      if (sinBeta > 1) {
        console.error(
          "Ошибка! Треугольник с такими параметрами не существует (сторона a слишком мала для такого угла).",
        );
      } else {
        const beta = Math.asin(sinBeta); // в радианах
        const alphaRad = toRadians(alpha);
        const gammaRad = Math.PI - alphaRad - beta;

        if (gammaRad <= 0) {
          console.error(
            "Ошибка! Сумма двух углов превышает или равна 180°. Треугольник не существует.",
          );
        } else {
          // Площадь по двум сторонам и углу между ними (Gamma)
          const s = 0.5 * a * b * Math.sin(gammaRad);
          console.log(`Площадь треугольника: ${s.toFixed(2)}`);
        }
      }
      break;
    }

    case 5: {
      // 5. По высоте и стороне
      const h = parseFloat(await askQuestion("Введите высоту h: "));
      const a = parseFloat(
        await askQuestion("Введите длину стороны, на которую опущена высота: "),
      );

      if (isNaN(h) || isNaN(a) || h <= 0 || a <= 0) {
        console.error(
          "Ошибка! Высота и сторона должны быть положительными числами.",
        );
      } else {
        // Формула: S = 0.5 * a * h
        const s = 0.5 * a * h;
        console.log(`Площадь треугольника: ${s.toFixed(2)}`);
      }
      break;
    }

    default:
      console.error("Ошибка! Неверный выбор. Выберите пункт от 1 до 5.");
      break;
  }

  rl.close();
}

main();
