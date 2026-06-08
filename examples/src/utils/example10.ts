export function handleField1Change(
  e: React.ChangeEvent<HTMLInputElement>,
  setField1: (field1: string) => void,
  setField2: (field2: string) => void,
) {
  const value = e.target.value;
  setField1(value);
  setField2(value);
}

export function handleSubmit(e: React.SubmitEvent) {
  e.preventDefault();
  alert('Нажата кнопка submit. Передача данных формы');
}
