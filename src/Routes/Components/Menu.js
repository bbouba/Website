import React,{ useState } from 'react';
import styled from "styled-components";

const Nav = styled.nav`
  min-height: 9vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-around;
  }

`;

const Logo = styled.h1`
  font-size: 25px;
  color: black;
`;


const Navbar = styled.ul`
  list-style: none;
  display: flex;
  width:60%;
  justify-content:center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
padding: 0 3% 0 3%;
`;

const Link = styled.a`
color: #171819;
font-family: "Open Sans", sans-serif;
font-size: 16px;
font-weight: 700;
text-decoration: none;
background-image: linear-gradient(rgb(211, 199, 199), rgb(211, 199, 199));
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 0% 2px;
transition: background-size 0.3s;
  :hover {
    cursor: pointer;
    background-size: 100% 2px;
    color: rgb(60, 48, 88);
  
  }
`;

const NavIcon = styled.button`
  background: red;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background: white;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${({toggle}) => toggle ? "70%" : "40%"};
  }
`;

const Overlay = styled.div`
  position:absolute;
  height:${({toggle}) => toggle ? 0 : "100vh"};
  position: fixed;
  width: 36vw;
  right: 0;
  top: 9vh;
  background: #fff; 
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${({toggle}) => toggle ? 0 : 1};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

function Menu() {
  const [toggle, setToggle] = useState(false);
  // const onClick = e => {
  //   e.preventDefault();
  //   setToggle(!false);
  // };

  return (
    <>
      <Nav>
      <Logo>Amnick</Logo>
        <Navbar>
          <Item>
            <Link target="#" href="">
            Home
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              About us
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              Services
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              Our Work
            </Link>
          </Item>
        </Navbar>
        <NavIcon onClick={() => setToggle(!toggle)}>
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
        </NavIcon>
      </Nav>
      <Overlay toggle={!toggle}>
        <OverlayMenu toggle={!toggle}>
        <Item>
            <Link target="#" href="">
            Home
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              About us
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              Services
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              Our Work
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};
export default Menu;