import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <NavBarContainer>
      <Name>SkateShop</Name>
      <AnimatePresence>
        {display && (
          <>
            <MobileSideBar
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <CloseIcon onClick={() => setDisplay(!display)}>
                <AiOutlineClose />
              </CloseIcon>
              <ul>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </MobileSideBar>
            <BackDrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDisplay(!display)}
            />
          </>
        )}
      </AnimatePresence>
      <NavLinks>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">
            <FiShoppingCart />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setDisplay(!display)}>
            <AiOutlineMenu />
          </a>
        </li>
      </NavLinks>
    </NavBarContainer>
  );
};

const Name = styled.div`
  margin: 1rem;
  font-weight: 700;
  font-size: 1.3rem;
`;

const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: black;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;

const NavLinks = styled.ul`
  display: flex;
  padding-right: 0.3rem;
  align-self: center;

  li a {
    text-decoration: none;
    color: black;
    padding: 1rem;
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    li:last-child {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    li:nth-child(1),
    li:nth-child(2) {
      display: none;
    }
  }
`;

const MobileSideBar = styled(motion.div)`
  position: absolute;
  z-index: 999;
  height: 100%;
  width: 300px;
  right: 0;
  background-color: white;
  display: block;

  ul {
    font-size: 1.3rem;
  }

  li a {
    color: black;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  padding: 1rem;
  right: 0;
  cursor: pointer;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  z-index: 998;
  height: 100%;
  width: 100%;
  background: #000000bb;
`;

export default NavBar;
