import React, { useState } from 'react';

import {
  calculate,
  handleConcatStrings,
  handleLinkClick,
  handleLogic,
  postDecrement,
  postIncrement,
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  unaryMinus,
} from '../utils/example4';

export function Example4() {
  // Счетчик кликов по ссылке (State)
  const [clickCount, setClickCount] = useState<number>(0);

  // Калькулятор (Числа)
  const [num1, setNum1] = useState<string>('30');
  const [num2, setNum2] = useState<string>('4');
  const [mathResult, setMathResult] = useState<number | string>('');

  // Конкатенация строк
  const [str1, setStr1] = useState<string>('Java');
  const [str2, setStr2] = useState<string>('Script');
  const [strResult, setStrResult] = useState<string>('');

  // Логические операторы
  const [bool1, setBool1] = useState<boolean>(true);
  const [bool2, setBool2] = useState<boolean>(false);
  const [logicResult, setLogicResult] = useState<string>('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Пример 4</h2>
      <hr />

      {/* Вывод логов арифметики */}
      <section
        style={{ background: '#f9f9f9', padding: '10px', fontSize: '13px', borderRadius: '5px' }}
      >
        <h4>Лог базовых вычислений (Консоль):</h4>
        <div>a=100, b=10 Сложение a+=b. Результат: a={step1}</div>
        <div>Вычитание a-=b. Результат: a={step2}</div>
        <div>Умножение a*=b. Результат: a={step3}</div>
        <div>Деление a/=b. Результат: a={step4}</div>
        <div>Переопределили a=9, b=7. Остаток a%=b: a={step5}</div>
        <div>Сложное выражение. Результат: a={step6}</div>
        <div>
          Инкремент a++. Результат: a={postIncrement + 1} (было {postIncrement})
        </div>
        <div>Декремент a--. Результат: a={postDecrement - 1}</div>
        <div>Унарное вычитание a = -a. Результат: a={unaryMinus}</div>
      </section>

      {/* Ссылка-счетчик */}
      <section style={{ margin: '20px 0' }}>
        <a href="#" onClick={(e) => handleLinkClick(e, clickCount, setClickCount)}>
          Сколько раз нажата ссылка?
        </a>
        <span style={{ marginLeft: '10px', color: '#666' }}>(Нажато: {clickCount})</span>
      </section>

      {/* Форма Калькулятора */}
      <section
        style={{
          border: '1px solid #ccc',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '15px',
        }}
      >
        <h4>Математические операции</h4>
        <label>
          Число 1:{' '}
          <input type="text" size={4} value={num1} onChange={(e) => setNum1(e.target.value)} />
        </label>
        <label style={{ marginLeft: '10px' }}>
          Число 2:{' '}
          <input type="text" size={4} value={num2} onChange={(e) => setNum2(e.target.value)} />
        </label>
        <label style={{ marginLeft: '10px' }}>
          Результат: <input type="text" size={6} readOnly value={mathResult} />
        </label>
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => calculate('+', setMathResult, num1, num2)}>Сложить</button>
          <button
            onClick={() => calculate('-', setMathResult, num1, num2)}
            style={{ marginLeft: '5px' }}
          >
            Вычесть
          </button>
          <button
            onClick={() => calculate('*', setMathResult, num1, num2)}
            style={{ marginLeft: '5px' }}
          >
            Умножить
          </button>
          <button
            onClick={() => calculate('/', setMathResult, num1, num2)}
            style={{ marginLeft: '5px' }}
          >
            Разделить
          </button>
        </div>
      </section>

      {/* Операции со строками */}
      <section
        style={{
          border: '1px solid #ccc',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '15px',
        }}
      >
        <h4>Операции со строками</h4>
        <label>
          Строка 1: <input type="text" value={str1} onChange={(e) => setStr1(e.target.value)} />
        </label>
        <br />
        <label>
          Строка 2:{' '}
          <input
            type="text"
            value={str2}
            onChange={(e) => setStr2(e.target.value)}
            style={{ marginTop: '5px' }}
          />
        </label>
        <br />
        <label>
          Результат: <input type="text" readOnly value={strResult} style={{ marginTop: '5px' }} />
        </label>
        <br />
        <button
          onClick={() => handleConcatStrings(setStrResult, str1, str2)}
          style={{ marginTop: '10px' }}
        >
          Склеить строки
        </button>
      </section>

      {/* Логические операторы */}
      <section style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        <h4>Логические операторы</h4>
        <select
          value={bool1 ? 'true' : 'false'}
          onChange={(e) => setBool1(e.target.value === 'true')}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <select
          value={bool2 ? 'true' : 'false'}
          onChange={(e) => setBool2(e.target.value === 'true')}
          style={{ marginLeft: '10px' }}
        >
          <option value="false">false</option>
          <option value="true">true</option>
        </select>

        <label style={{ marginLeft: '10px' }}>
          Результат: <input type="text" readOnly value={logicResult} size={6} />
        </label>

        <div style={{ marginTop: '10px' }}>
          <button onClick={() => handleLogic('AND', setLogicResult, bool1, bool2)}>И &&</button>
          <button
            onClick={() => handleLogic('OR', setLogicResult, bool1, bool2)}
            style={{ marginLeft: '5px' }}
          >
            ИЛИ ||
          </button>
          <button
            onClick={() => handleLogic('NOT', setLogicResult, bool1, bool2)}
            style={{ marginLeft: '5px' }}
          >
            НЕ !
          </button>
        </div>
      </section>
    </div>
  );
}
