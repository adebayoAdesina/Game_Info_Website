import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../Components/game";
import { gamesAction } from "../store/actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import Gamedetail from "../Components/gameDetail";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gamesAction());
  }, [dispatch]);

  const { upComing, popular, newGames} = useSelector((state) => state.game);

  return (
    <GameList>
      <Gamedetail/>
      <h2>Upcoming Games</h2>
      <Games>
        {upComing.map((game, i)=> (<Game game={game} key={i}/>))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game, i)=> (<Game game={game} key={i}/>))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game, i)=> (<Game game={game} key={i}/>))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
