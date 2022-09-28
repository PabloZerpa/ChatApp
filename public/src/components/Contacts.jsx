import React, {useState, useEffect} from "react";
import Logout from "./Logout";
import Logo from '../assets/logo.png';
import styled from "styled-components";

export default function Contacts({contacts, changeChat})
{
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        async function setDataUser()
        {
            const data = await JSON.parse(localStorage.getItem("chat-app-user"));
            setCurrentUserName(data.username);
            setCurrentUserImage(data.avatarImage);
        }
        setDataUser();
      }, []);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };
    
    return(
        <>
            <Container>
                <div className="current-user">
                    <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
                        <div className="username">
                            <h2>{currentUserName}</h2>
                        </div>
                    </div>
                    <Logout />
                </div>
                <div className="contacts">
                  <input type='text' placeholder="🔍︎ Find a user" />
                    {contacts.map((contact, index) => {
                        return (
                            <div
                                key={contact._id}
                                className={`contact ${
                                index === currentSelected ? "selected" : "" }`}
                                onClick={() => changeCurrentChat(index, contact)}
                            >
                                <div className="avatar">
                                    <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="" />
                                </div>
                                <div className="username">
                                    <h3>{contact.username}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
            </Container>
        </>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #05194F;
  
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #6ea1ff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    input {
      width: 100%;
      height: 10%;
      background-color: #ffffff34;
      opacity: .5;
      color: #fff;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
        &::selection {
          background-color: #9a86f3;
        }
        &:focus {
          outline: none;
        }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      opacity: .75;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #0A348F;
      opacity: 1;
    }
  }
  .current-user {
    background-color: #0A348F;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .avatar {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        height: 3rem;
        max-inline-size: 100%;
      }
      .username {
        h2 {
          color: white;
        }
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
