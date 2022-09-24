import axios from "axios";
import { popularGameURL, upComingGameURL, newGameURL } from "../../api";

export const gamesAction = () => async (dispatch) => {
  const popularData = await axios.get(popularGameURL());
  const upComingGameData = await axios.get(upComingGameURL());
  const newGameData = await axios.get(newGameURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGameData.data.results,
      upComing: upComingGameData.data.results,
    },
  });
};
