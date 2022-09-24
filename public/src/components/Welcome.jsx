import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hello from "../assets/hi.gif";
import Logout from "./Logout";

export default function Welcome({currentUser})
{
    const [userName, setUserName] = useState("");

    useEffect(() => {
        async function name()
        {
            setUserName(await JSON.parse(localStorage.getItem("chat-app-user")).username);
        }
        name();
    }, []);

  return(
    <Container>
      <Logout className="logout" />
      <div className="welcome">
        <img src={Hello} alt="Hello" /> 
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
color: white;
flex-direction: column;
.welcome
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
  img {
    height: 160px;
  }
  span {
    color: gold;
  }
}
`;
