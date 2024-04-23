export const userIntialValue = {
  name: "",
  email: "",
  role: "",
  password: "",
};
export const AdministratorReducer = (state, action) => {
  console.log("action", action, state);
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "CLEAR-ALL") {
    return userIntialValue;
  } else {
    return { ...state, [action.type.toLowerCase()]: action.value };
  }
};
