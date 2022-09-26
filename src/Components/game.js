import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Detailaction from "../store/actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  const { name, background_image, released, id } = game;
  const dispatch = useDispatch();
  const loadDetail = () => {
    dispatch(Detailaction(id));
  };

  return (
    <StyledGame onClick={loadDetail}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
