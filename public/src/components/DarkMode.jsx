import React, {useState} from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";

export default function DarkMode()
{
    const [darkMode, setDarkMode] = useState(false);

    const darkModeChange = () => {
        setDarkMode(!darkMode);
    }

    return(
        <Container>
            <div className="darkModeBtn" onClick={darkModeChange} >
            { darkMode ? 
            ( <FaSun className="sun" /> ) :
            ( <FaMoon className="moon" /> )
            }
            </div>
        </Container>
    )
}

const Container = styled.div`
.darkModeBtn
  {
    width: 48px;
    height: 48px;
    font-size: 24px;
    background-color: #0A348F;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .sun
    {
      color: gold;
    }
    .moon
    {
      color: gold;
    }
  }
`;

