export function handleMonthChange(
  e: React.ChangeEvent<HTMLSelectElement>,
  setSelectedMonth: (selectedMonth: string) => void,
  setMonthName: (monthName: string) => void,
): void {
  const value = e.target.value;
  setSelectedMonth(value);

  const n: number = parseInt(value, 10);

  let result: string;
  switch (n) {
    case 1:
      result = 'Январь';
      break;
    case 2:
      result = 'Февраль';
      break;
    case 3:
      result = 'Март';
      break;
    case 4:
      result = 'Апрель';
      break;
    case 5:
      result = 'Май';
      break;
    case 6:
      result = 'Июнь';
      break;
    case 7:
      result = 'Июль';
      break;
    case 8:
      result = 'Август';
      break;
    case 9:
      result = 'Сентябрь';
      break;
    case 10:
      result = 'Октябрь';
      break;
    case 11:
      result = 'Ноябрь';
      break;
    case 12:
      result = 'Декабрь';
      break;
    default:
      result = 'Месяц не определен';
  }

  setMonthName(result);
}
