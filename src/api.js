const base_url = `https://api.rawg.io/api?key=${process.env.REACT_APP_GAME_API}/`;

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
console.log(currentDate);

getCurrentMonth();
//Popular Games
const popular_games = `games=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGameURL = () => `${base_url}${popularGameURL}`;
