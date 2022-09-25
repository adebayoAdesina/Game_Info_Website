const base_url = `https://api.rawg.io/api/`;

//Getting the date;
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const date = new Date().getDay();

  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();

//Day/month/year
const lastYear = `${currentYear - 1}-${currentDay}-${currentMonth}`;
const currentDate = `${currentYear}-${currentDay}-${currentMonth}`;
const nextYear = `${currentYear + 1}-${currentDay}-${currentMonth}`;

//Popular Games
// const popular_games = `games?key=${process.env.REACT_APP_GAME_API}?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10?key=77f989af44874083b8431a195c3c1007`;

const popular_games = `games?key=${process.env.REACT_APP_GAME_API}`;
const upComing_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGameURL = () => `${base_url}${popular_games}`;
export const upComingGameURL = () => `${base_url}${upComing_games}`;
export const newGameURL = () => `${base_url}${new_games}`;

export const gameDetailURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_GAME_API}`;
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_GAME_API}`;
