export const checkValidData = (email, password) => {
  const isEmailIdValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailIdValid) return "Email ID is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const checkSighUpValidData = ( fullname, email, password ) => {

  const isNameValid = /^[A-Z][a-z]+\s[a-zA-Z\s]+/.test(fullname);

  
  const isEmailIdValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  
  if (!isNameValid) return "Name is not valid";

  if (!isEmailIdValid) return "Email ID is not valid";

  if (!isPasswordValid) return "Password is not valid";

 

  return null;
};
