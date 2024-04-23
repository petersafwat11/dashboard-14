import { generateArray } from "@/app/lib/generateArray";

export const otherServersReducer = (state, action) => {
  console.log("action", state, action);
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "CLEAR-ALL") {
    return {
      checked: false,
      num: 0,
      otherLangs: [],
    };
  } else if (action.type === "CHECKBOX") {
    return {
      checked: action.value,
      num: 0,
      otherLangs: [],
    };
  } else if (action.type == "NUM") {
    let otherLangs = generateArray(action.value).map((lang, index) => ({
      index: index + 1,
      name: "",
      num: 0,
      channels: [],
    }));
    return {
      ...state,
      num: action.value,
      otherLangs: otherLangs,
    };
  } else if (action.type == "SERVER-NAME") {
    let newLangs = state.otherLangs.filter(
      (server) => server.index !== action.value.index
    );

    let changedLang = state.otherLangs.find(
      (item) => item.index == action.value.index
    );
    changedLang = { ...changedLang, name: action.value.name };
    newLangs.push(changedLang);
    return {
      ...state,
      otherLangs: newLangs,
    };
  } else if (action.type == "SERVER-NUM") {
    let newLangs = state.otherLangs.filter(
      (server) => server.index !== action.value.index
    );

    let changedLangChannels = generateArray(action.value.num)
      .map((num) => `server-${num}`)
      .map((name) => ({ name: name, streamLinkName: "", streamLinkUrl: "" }));
    let changedLang = state.otherLangs.find(
      (server) => server.index == action.value.index
    );
    changedLang = {
      num: action.value.num,
      index: action.value.index,
      channels: changedLangChannels,
      name: changedLang.name,
    };
    newLangs.push(changedLang);

    return {
      ...state,
      otherLangs: newLangs,
    };
  } else if (action.type == "SERVER-CHANNELS") {
    let newLangs = state.otherLangs.filter(
      (server) => server.index !== action.value.index
    );
    let changedLang = state.otherLangs.find(
      (item) => item.index == action.value.index
    );

    let newLangChannels = changedLang.channels.filter(
      (server) => server.name != action.value.name
    );
    let changedChannel = changedLang.channels.find(
      (server) => server.name == action.value.name
    );

    // changedChannel = { ...changedChannel, value: action.value.serverValue };
    changedChannel = {
      ...changedChannel,
      streamLinkName: action.value.streamLinkName,
      streamLinkUrl: action.value.streamLinkUrl,
    };

    newLangChannels.push(changedChannel);
    changedLang.channels = newLangChannels;
    newLangs.push(changedLang);
    return {
      ...state,
      otherLangs: newLangs,
    };
  } else {
    return { ...state };
  }
};
