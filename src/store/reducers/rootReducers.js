import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gameReducer from "./gamesReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  detail: detailReducer
});

export default rootReducer;
