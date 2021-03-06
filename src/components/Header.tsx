import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            <span role="img" aria-label="logo">💖</span>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/">Shop</Link>
                <a href="https://github.com/xiaotiandada" target="_blank" rel="noopener noreferrer">About</a>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    height: 60px;
    background-color: #3946f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #e5e5e5;
    span {
        font-size: 30px;
    }
    a {
        color: rgb(255, 255, 255, 70%);
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .05);
        margin: 0 10px;
        font-size: 16px;
    }
`

export default Header