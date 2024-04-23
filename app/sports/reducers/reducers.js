import { matchIntialVal } from "../[id]/intialValues";

export const mainEventReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else {
    const playerIndex = prevState.players.findIndex(
      (player, index) => index === action.player.index
    );
    prevState.players[playerIndex] = {
      ...prevState.players[playerIndex],
      [action.type]: action.player.value,
    };
    return prevState;
  }
};
export const fightersReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      ...prevState,
      [action.team]: {
        num: prevState[action.team].num + 1,
        players: [
          ...prevState[action.team].players,
          {
            name: "",
            result: "",
            index: prevState[action.team].players.length,
          },
        ],
      },
    };
  } else if (action.type === "DECREMENT") {
    if (prevState[action.team].num === 0) {
      return prevState;
    }
    return {
      ...prevState,
      [action.team]: {
        num: prevState[action.team].num - 1,
        players: prevState[action.team].players.slice(0, -1),
      },
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState[action.team].players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team].players[playerIndex] = {
      name: action.player.name,
      result: prevState[action.team].players[playerIndex].result,
      index: action.player.index,
    };
    return prevState;
  } else if (action.type === "RESULT") {
    const playerIndex = prevState[action.team].players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team].players[playerIndex] = {
      name: prevState[action.team].players[playerIndex].name,
      result: action.player.result,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const positionsReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      num: prevState.num + 1,
      checked: true,
      players: [
        ...prevState.players,
        { name: "", index: prevState.players.length },
      ],
    };
  } else if (action.type === "DECREMENT") {
    if (prevState.num === 0) {
      return prevState;
    }
    return {
      num: prevState.num - 1,
      checked: true,
      players: prevState.players.slice(0, -1),
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState.players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState.players[playerIndex] = {
      name: action.player.name,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const horseRidersReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      num: prevState.num + 1,
      checked: true,
      players: [
        ...prevState.players,
        { name: "", index: prevState.players.length },
      ],
    };
  } else if (action.type === "DECREMENT") {
    if (prevState.num === 0) {
      return prevState;
    }
    return {
      num: prevState.num - 1,
      checked: true,
      players: prevState.players.slice(0, -1),
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState.players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState.players[playerIndex] = {
      name: action.player.name,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};

export const driversReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      num: prevState.num + 1,
      checked: true,
      players: [
        ...prevState.players,
        { name: "", index: prevState.players.length },
      ],
    };
  } else if (action.type === "DECREMENT") {
    if (prevState.num === 0) {
      return prevState;
    }
    return {
      num: prevState.num - 1,
      checked: true,
      players: prevState.players.slice(0, -1),
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState.players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState.players[playerIndex] = {
      name: action.player.name,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const lineupsReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState[action.team].findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team][playerIndex] = {
      name: action.player.name,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};

export const tennisLineupsReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      ...prevState,
      [action.team]: {
        num: prevState[action.team].num + 1,
        players: [
          ...prevState[action.team].players,
          {
            name: "",
            gender: "",
            index: prevState[action.team].players.length,
          },
        ],
      },
    };
  } else if (action.type === "DECREMENT") {
    if (prevState[action.team].num === 0) {
      return prevState;
    }
    return {
      ...prevState,
      [action.team]: {
        num: prevState[action.team].num - 1,
        players: prevState[action.team].players.slice(0, -1),
      },
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState[action.team].players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team].players[playerIndex] = {
      name: action.player.name,
      gender: prevState[action.team].players[playerIndex].gender,
      index: action.player.index,
    };
    return prevState;
  } else if (action.type === "GENDER") {
    const playerIndex = prevState[action.team].players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team].players[playerIndex] = {
      name: prevState[action.team].players[playerIndex].name,
      gender: action.player.gender,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const volleyballDriversReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      ...prevState,
      [action.team]: {
        num: prevState[action.team].num + 1,
        players: [
          ...prevState[action.team].players,
          {
            name: "",
            gender: "",
            index: prevState[action.team].players.length,
          },
        ],
      },
    };
  } else if (action.type === "DECREMENT") {
    if (prevState[action.team].num === 0) {
      return prevState;
    }
    return {
      ...prevState,
      [action.team]: {
        num: prevState[action.team].num - 1,
        players: prevState[action.team].players.slice(0, -1),
      },
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState[action.team].players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team].players[playerIndex] = {
      name: action.player.name,
      gender: prevState[action.team].players[playerIndex].gender,
      index: action.player.index,
    };
    return prevState;
  } else if (action.type === "GENDER") {
    const playerIndex = prevState[action.team].players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState[action.team].players[playerIndex] = {
      name: prevState[action.team].players[playerIndex].name,
      gender: action.player.gender,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const wwweFightersReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      num: prevState.num + 1,
      checked: true,
      players: [
        ...prevState.players,
        { name: "", index: prevState.players.length },
      ],
    };
  } else if (action.type === "DECREMENT") {
    if (prevState.num === 0) {
      return prevState;
    }

    return {
      num: prevState.num - 1,
      checked: true,
      players: prevState.players.slice(0, -1),
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState.players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState.players[playerIndex] = {
      name: action.player.name,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const featuredFightersReducer = (state, action) => {
  console.log("state", state);
  let prevState = { ...state };
  if (action.type === "CHECK") {
    return {
      ...prevState,
      checked: !prevState.checked,
    };
  } else if (action.type === "INCREMENT") {
    return {
      num: prevState.num + 1,
      checked: true,
      players: [
        ...prevState.players,
        { name: "", age: null, index: prevState.players.length },
      ],
    };
  } else if (action.type === "DECREMENT") {
    return {
      num: prevState.num - 1,
      checked: true,
      players: prevState.players.slice(0, -1),
    };
  } else if (action.type === "PLAYER-NAME") {
    const playerIndex = prevState.players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState.players[playerIndex] = {
      name: action.player.name,
      age: prevState.players[playerIndex].age,
      index: action.player.index,
    };
    return prevState;
  } else if (action.type === "PLAYER-AGE") {
    const playerIndex = prevState.players.findIndex(
      (player) => player.index === action.player.index
    );
    prevState.players[playerIndex] = {
      name: prevState.players[playerIndex].name,
      age: action.player.age,
      index: action.player.index,
    };
    return prevState;
  }
  return;
};
export const matchReducer = (state, action) => {
    console.log("state", state);
    if (action.type === "UPDATE-ALL") {
      const val = { ...action.value };
      delete val._id;
      return val;
    }
    if (action.type === "CLEAR-ALL") {
      return matchIntialVal;
    } else if (action.type === "SPORT-CATEGORY") {
      return {
        ...state,
        sportCategory: action.value,
      };
    } else if (action.type === "FIRST-TEAM-NAME") {
      return {
        ...state,
        firstTeamName: action.value,
      };
    } else if (action.type === "SECOND-TEAM-NAME") {
      return {
        ...state,
        secondTeamName: action.value,
      };
    } else if (action.type === "TEAMS-TITLE") {
      return {
        ...state,
        teamsTitle: action.value,
      };
    } else if (action.type === "EVENT-DATE") {
      return {
        ...state,
        eventDate: action.value,
      };
    } else if (action.type === "EVENT-DATE-TEXT") {
      return {
        ...state,
        eventDateText: action.value,
      };
    } else if (action.type === "EVENT-TIME") {
      return {
        ...state,
        eventTime: action.value,
      };
    } else if (action.type === "MATCH-ID") {
      return {
        ...state,
        matchId: Number(action.value),
      };
    } else if (action.type === "EVENT-LEAGUE") {
      return {
        ...state,
        eventLeague: action.value,
      };
    } else if (action.type === "EVENT-STADIUM") {
      return {
        ...state,
        eventStadium: action.value,
      };
    } else if (action.type === "BACKGROUND-LOGO") {
      return {
        ...state,
        backgroundLogo: action.value,
      };
    } else if (action.type === "LEAGUE-LOGO") {
      return {
        ...state,
        leagueLogo: action.value,
      };
    } else if (action.type === "FIRST-TEAM-LOGO") {
      return {
        ...state,
        firstTeamLogo: action.value,
      };
    } else if (action.type === "SECOND-TEAM-LOGO") {
      return {
        ...state,
        secondTeamLogo: action.value,
      };
    } else if (action.type === "FLAG-LOGO") {
      return {
        ...state,
        flagLogo: action.value,
      };
    } else if (action.type === "PLAY-STREAM") {
      return {
        ...state,
        playStream: action.value,
      };
    } else if (action.type === "REMOVE-STREAM") {
      return {
        ...state,
        removeStream: action.value,
      };
    } else if (action.type === "REMOVE-COUNTDOWN") {
      return {
        ...state,
        removeCountdown: action.value,
      };
    } else if (action.type === "ENDED-EVENT") {
      return {
        ...state,
        endedEvent: action.value,
      };
    } else if (action.type === "FIRST-TEAM-POLL") {
      return {
        ...state,
        firstTeamPoll: action.value,
      };
    } else if (action.type === "SECOND-TEAM-POLL") {
      return {
        ...state,
        secondTeamPoll: action.value,
      };
    } else if (action.type === "SHOWS-POLL") {
      return {
        ...state,
        showsPoll: action.value,
      };
    }
  };
  