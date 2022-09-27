import React, { useState } from 'react';
import styled from 'styled-components';
import { animate, motion } from 'framer-motion';
import logo from '../img/logo.svg'
import { useDispatch } from 'react-redux';
import { fetchSearched } from '../store/actions/gamesAction';
import { fadeIn } from '../Styled/animation';

const Navbar = () => {
    const [searching, setSearching] = useState('')
    const dispatch = useDispatch()
    const textToSearch = (e) => {
        setSearching(e.target.value);
    }

    const searchBtn = (e) => {
        e.preventDefault();
        dispatch(fetchSearched(searching))
        // setSearching('')
    }
    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }
     return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>Ingnite</h1>
            </Logo>
            <form className="search">
                <input value={searching} type="text" onChange={textToSearch}/>
                <button type='submit' onClick={searchBtn}>Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        outline: none;
       
    }
    button {
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        cursor: pointer;
        background-color: #ff7676;
        color: white;
    }
`        
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;  
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`        

export default Navbar;
