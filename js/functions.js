// Функция для проверки длины строки
const checkLine = (line, number) => line.length <= number;
checkLine('Это строка', 10);

// Функция для проверки, является ли строка палиндромом.
const checkPalindrome = (line) => {
  const stroke = line.toLowerCase().replaceAll(' ', '');
  let anotherStroke = '';
  for(let i = stroke.length - 1; i >= 0; i--) {
    anotherStroke += stroke.at(i);
  }
  return stroke === anotherStroke;
};

checkPalindrome('топот');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getNumber = (line) => {
  if(typeof line === 'number') {
    return line;
  }
  let result = '';
  for(let i = 0; i < line.length; i++) {
    if(!Number.isNaN(parseInt(line.at(i), 10))) {
      result += line.at(i);
    }
  }
  return parseInt(result, 10);
};

getNumber('Новый 2023');

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами
//— и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
//Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

const getLine = (stroke, minLength, additionalSymbol) => {
  let result = stroke;
  while(result.length < minLength) {
    const newResultLength = result.length + additionalSymbol.length;
    const actualPad = newResultLength <= minLength ? additionalSymbol : additionalSymbol.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};
getLine('q', 4, 'werty');
