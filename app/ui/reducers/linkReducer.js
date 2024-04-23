const linksReducer = (state, action) => {

  if (action.type === "FETCH-ALL" || action.type === "RESET-ALL") {
    return action.value;
  } else if (action.type === "PROTECTED-BADGE") {
    return { ...state, protectedBadge: action.value };
  } else if (action.type === "CONTACT-US") {
    return { ...state, contactUS: action.value };
  }
  else {
    return { ...state, [action.type.toLowerCase()]: action.value };
  }
};
export default linksReducer;
