export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules, newPassword) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value && value.toString().trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.EqualNewPassword) {
    isValid = value === newPassword;
  }
  if (rules.containSpecialCahrs) {
    const format = /[`!@#$%^&*()_+\-=/\]{};':"\\|,.<>?~]/;
    const formatNums = /[0123456789]/;

    isValid = format.test(value) && isValid;
    isValid = formatNums.test(value) && isValid;
  }
  if (rules.isEmail) {
    isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }
  console.log(35, rules);
  if (rules.isNumber) {
    isValid = /^-?\d+$/.test(value);
  }
  return isValid;
};
