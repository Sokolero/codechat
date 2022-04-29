export const required = (value) => (!value ? "required" : undefined);

export const isEmail = (value) =>
  !/[a-z]+@[a-z]+\.[a-z]+/.test(value) ? "Invalid email address" : undefined;

export const isValidPassword = (value) => {
  const regSet = [/[a-z]+/, /[A-Z]+/, /\d+/, /\w{6,}/];
  for (let reg of regSet) {
    if (!reg.test(value)) {
      return "password must have each of symbols: A-Z, a-z, 0-9";
    }
  }

  return undefined;
};

export const isMatch = (target) => (value) =>
  value !== target ? "passwords is not matched" : undefined;

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
