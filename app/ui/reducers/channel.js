export const channelReducer = (state, action) => {
  // console.log("state", state);
  if (action.type === "CLEAR-ALL") {
    return reducerIntialValue;
  } else if (action.type === "NOT-FOUND") {
    return { ...state, error: action.value };
  } else if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "CHANNEL-NAME") {
    return { ...state, channelName: action.value };
  } else if (action.type === "MODE") {
    if (state.mode === action.value) {
      return { ...state, mode: null };
    }
    return { ...state, mode: action.value };
  } else if (action.type === "LANGUAGE") {
    return { ...state, language: action.value };
  } else if (action.type === "STREAM-LINK") {
    return {
      ...state,
      streamLinkName: action.streamLinkName,
      streamLink: action.streamLink,
    };
  } else {
    return {
      ...state,
      // streamLinksAvaiable: action.value,
    };
  }
};
export const reducerIntialValue = {
  channelName: "",
  mode: "",
  language: "",
  streamLink: "",
  streamLinkName: "",
  error: "",
  // streamLinksAvaiable: [],
};
