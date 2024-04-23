export const reducerIntialValue = {
  channelName: "",
  URL: "",
  // RMTPKey: "",
  error: "",
};
export const streamLinkReducer = (state, action) => {
  if (action.type === "CLEAR-ALL") {
    return reducerIntialValue;
  } else if (action.type === "NOT-FOUND") {
    return { ...state, error: action.value };
  }
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  if (action.type === "CHANNEL-NAME") {
    return { ...state, channelName: action.value };
  } else if (action.type === "URL") {
    return { ...state, URL: action.value };
  } else {
    return state;
  }
  // else {
  //   return {
  //     ...state,
  //     RMTPKey: action.value,
  //   };
  // }
};
