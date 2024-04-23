
import { generateArray } from "@/app/lib/generateArray";

export const mainserversReducers = (state, action) => {
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "CLEAR-ALL") {
    return {
      english: { checked: false, num: 0, channels: [] },
      arabic: { checked: false, num: 0, channels: [] },
      spanish: { checked: false, num: 0, channels: [] },
    };
  } else if (action.lang === "ENGLISH") {
    if (action.type === "CHECKBOX") {
      return {
        ...state,
        english: { checked: action.value, channels: [], num: 0 },
      };
    } else if (action.type === "NUM") {
      let serversNames = generateArray(action.value)
        .map((num) => `server-${num}`)
        .map((name) => ({ name: name, serverValue: {} }));

      return {
        ...state,
        english: {
          ...state.english,
          channels: serversNames,
          num: action.value,
        },
      };
    } else {
      let newServers = state.english.channels.filter(
        (server) => server.name !== action.value.name
      );
      newServers.push({
        name: action.value.name,
        serverValue: {name: action.value.streamLinkName, streamLinkUrl:action.value.streamLinkUrl },
      });

      return {
        ...state,
        english: {
          ...state.english,
          channels: newServers,
        },
      };
    }
  } else if (action.lang === "ARABIC") {
    if (action.type === "CHECKBOX") {
      return {
        ...state,
        arabic: { checked: action.value, channels: [], num: 0 },
      };
    } else if (action.type === "NUM") {
      let serversNames = generateArray(action.value)
        .map((num) => `server-${num}`)
        .map((name) => ({ name: name, serverValue: {} }));

      return {
        ...state,
        arabic: {
          ...state.arabic,
          channels: serversNames,
          num: action.value,
        },
      };
    } else {
      let newServers = state.arabic.channels.filter(
        (server) => server.name !== action.value.name
      );
      newServers.push({
        name: action.value.name,
        serverValue: {name: action.value.streamLinkName, streamLinkUrl:action.value.streamLinkUrl },
      });

      return {
        ...state,
        arabic: {
          ...state.arabic,
          channels: newServers,
        },
      };
    }
  } else if (action.lang === "SPANISH") {
    if (action.type === "CHECKBOX") {
      return {
        ...state,
        spanish: { checked: action.value, channels: [], num: 0 },
      };
    } else if (action.type === "NUM") {
      let serversNames = generateArray(action.value)
        .map((num) => `server-${num}`)
        .map((name) => ({ name: name, serverValue: {} }));

      return {
        ...state,
        spanish: {
          ...state.spanish,
          channels: serversNames,
          num: action.value,
        },
      };
    } else {
      let newServers = state.spanish.channels.filter(
        (server) => server.name !== action.value.name
      );
      newServers.push({
        name: action.value.name,                                    
        serverValue: {name: action.value.streamLinkName, streamLinkUrl:action.value.streamLinkUrl },
      });

      return {
        ...state,
        spanish: {
          ...state.spanish,
          channels: newServers,
        },
      };
    }
  } else {
    return { ...state };
  }
};
