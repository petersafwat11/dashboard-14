export const intialValue = {
  title: "",
  description: "",
  coverImage: null,
  coverFile: null,
  numOfSubnews: 1,
  subNews: [{ index: 1, title: "", description: "", image: null, file: null }],
};
export const newsReducer = (state, action) => {
  // console.log("state", action);
  if (action.type === "CLEAR-ALL") {
    return intialValue;
  }
  if (action.type === "UPDATE-ALL") {
    console.log(action.value, "action.value", action.value.coverImage);

    return action.value;
  }
  if (action.type === "TITLE") {
    return { ...state, title: action.value };
  } else if (action.type === "DESCRIPTION") {
    return { ...state, description: action.value };
  } else if (action.type === "COVER-IMAGE") {
    return { ...state, coverFile: action.file, coverImage: action.image };
  } else if (action.type === "ADD-SUBNEWS") {
    let updatedSubNews = [...state.subNews];
    const addedSubNews = {
      index: action.value,
      title: "",
      description: "",
      image: "",
    };
    updatedSubNews.push(addedSubNews);
    return {
      ...state,
      numOfSubnews: action.value,
      subNews: updatedSubNews,
    };
  } else if (action.type === "remove-SUBNEWS") {
    let updatedSubNews = [...state.subNews];
    updatedSubNews.pop();
    return {
      ...state,
      numOfSubnews: action.value,
      subNews: updatedSubNews,
    };
  } else if (action.type === "SUBNEWS-TITLE") {
    const prevNewsState = [...state.subNews];
    let updatedSubNews = prevNewsState.filter(
      (item) => item.index !== action.index
    );
    let changedSubnews = prevNewsState.find(
      (item) => item.index === action.index
    );
    changedSubnews = { ...changedSubnews, title: action.value };

    updatedSubNews.push(changedSubnews);
    return {
      ...state,
      subNews: updatedSubNews,
    };
  } else if (action.type === "SUBNEWS-DESCRIPTION") {
    const prevNewsState = [...state.subNews];
    let updatedSubNews = prevNewsState.filter(
      (item) => item.index !== action.index
    );
    let changedSubnews = prevNewsState.find(
      (item) => item.index === action.index
    );
    changedSubnews = { ...changedSubnews, description: action.value };

    updatedSubNews.push(changedSubnews);
    return {
      ...state,
      subNews: updatedSubNews,
    };
  } else if (action.type === "SUBNEWS-IMAGE") {
    const prevNewsState = [...state.subNews];
    let updatedSubNews = prevNewsState.filter(
      (item) => item.index !== action.index
    );
    let changedSubnews = prevNewsState.find(
      (item) => item.index === action.index
    );
    changedSubnews = {
      ...changedSubnews,
      file: action.file,
      image: action.image,
    };

    updatedSubNews.push(changedSubnews);
    return {
      ...state,
      subNews: updatedSubNews,
    };
  }
};
