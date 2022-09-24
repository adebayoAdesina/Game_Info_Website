const initstate = {
  popular: [],
  newGames: [],
  upComing: [],
};
const gameReducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };

    default:
      return { ...state };
  }
};

export default gameReducer;
