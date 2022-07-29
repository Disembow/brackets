module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8']
  const closeBrackets = {
      [')']: '(',
      ['}']: '{',
      [']']: '[',
      ['|']: '|',
      ['2']: '1',
      ['4']: '3',
      ['6']: '5',
      ['7']: '7',
      ['8']: '8',
  }

  for (i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      // console.log(currentSymbol);

      if (openBrackets.includes(currentSymbol)) {
          stack.push(currentSymbol);
          // console.log(stack);
      } else {
          if (stack.length === 0) {
              return false;
          }

          let topElement = stack[stack.length - 1];
          // console.log(topElement);
          
          if (closeBrackets[currentSymbol] === topElement) {
              stack.pop();
              // console.log(stack);
          } else {
              return false;
          }
      }
  }
  return stack.length === 0 || stack.length % 2 === 0;
}



