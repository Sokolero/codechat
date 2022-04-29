export const required = (value) => (value ? undefined : "required");
export const isEmail = (value) => /[a-z]+@[a-z]+\.[a-z]+/.test(value);
export const isValidPassword = (value) => {
  const regSet = [/[a-z]+/, /[A-Z]+/, /\d+/, /\w{6,}/];
  regSet.forEach((regexp) => {
    if (!regexp.test(value)) {
      return false;
    }
  });
  return true;
};

export const isMatch = (value, target) => value === target;
