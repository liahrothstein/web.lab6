// Описываем интерфейс для структуры данных формы
export interface FormData {
  name: string;
  email: string;
  url: string;
  message: string;
}

// Начальное пустые значения формы
export const initialFormState: FormData = {
  name: '',
  email: '',
  url: '',
  message: '',
};

// Универсальный обработчик изменений для всех полей
export function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: (formData: FormData) => void,
) {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

// Функция валидации формы (аналог checkFields)
function checkFields(data: FormData, setError: (error: string) => void): boolean {
  // Проверяем, что все поля заполнены (удаляя лишние пробелы через trim)
  if (!data.name.trim() || !data.email.trim() || !data.url.trim() || !data.message.trim()) {
    setError('Пожалуйста, заполните все поля формы!');
    return false;
  }

  const hasDigits = /[0-9]/.test(data.name);
  if (hasDigits) {
    setError('Поле "Имя" не должно содержать цифры!');
    return false;
  }

  setError(''); // Если всё ок, убираем ошибку
  return true;
}

// Обработчик отправки формы (с использованием React.SubmitEvent)
export function handleSubmit(
  e: React.SubmitEvent,
  setError: (error: string) => void,
  formData: FormData,
) {
  e.preventDefault(); // Предотвращаем перезагрузку страницы

  // Вызываем функцию проверки
  if (checkFields(formData, setError)) {
    alert('Форма успешно валидирована и отправлена!');
    console.log('Отправленные данные:', formData);
  }
}

// Функция для кнопки "Очистить" (вместо type="reset")
export function handleReset(
  setFormData: (formData: FormData) => void,
  setError: (error: string) => void,
) {
  setFormData(initialFormState);
  setError('');
}
