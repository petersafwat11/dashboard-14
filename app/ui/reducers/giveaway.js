export const giveawayPrizeIntialValue = {
  title: "",
  description: "",
  startTime: "",
  endTime: "",
  prizeImage: null,
  imageSrc: null,
};
export const prizeReducer = (state, action) => {
  console.log("state", state);
  if (action.type === "RESET-ALL") {
    return giveawayPrizeIntialValue;
  }
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  if (action.type === "TITLE") {
    return { ...state, title: action.value };
  } else if (action.type === "DESCRIPTION") {
    return { ...state, description: action.value };
  } else if (action.type === "START-TIME") {
    return { ...state, startTime: action.value };
  } else if (action.type === "END-TIME") {
    return { ...state, endTime: action.value };
  } else {
    // coverFile: action.file, coverImage: action.image
    return { ...state, prizeImage: action.file, imageSrc: action.image };
  }
};
