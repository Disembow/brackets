module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let open = [];
  let close = [];
  let equal = [];
  let stack = [];

  bracketsConfig.map((e) => {
    if (e[0] === e[1]) {
      equal.push(e[0]);
    } else {
      open.push(e[0]);
      close.push(e[1]);
    }
  });

  for (let i = 0; i < str.length; i++) {
    let closeIndex = close.indexOf(str[i]);
    let equalIndex = equal.indexOf(str[i]);

    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else if (close.includes(str[i])) {
      if (stack.length === 0) return false;

      if (stack[stack.length - 1] === open[closeIndex]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else if (equal.includes(str[i])) {
      if (stack[stack.length - 1] === equal[equalIndex]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }

  return stack.length === 0;
};
