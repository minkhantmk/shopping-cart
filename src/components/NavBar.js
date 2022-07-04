import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <NavBarContainer>
      <Name>Shop</Name>
      <AnimatePresence>
        {display && (
          <>
            <MobileNavLinks
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </MobileNavLinks>
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
          <a href="#">Products</a>
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

const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = styled.div`
  display: none;
  padding: 0.7rem;

  @media (max-width: ${({theme}) => theme.mobile}) {
    display: flex;
    position: absolute;
    right: 0rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  padding-right: 0.3rem;

  li a {
    text-decoration: none;
    color: white;
    padding: 0.7rem;
    display: block;
  }

  @media (min-width: ${({theme}) => theme.mobile}) {
    li:last-child {
      display: none;
    }
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    li:nth-child(1),
    li:nth-child(2) {
      display: none;
    }
  }
`;

const MobileNavLinks = styled(motion.div)`
  position: absolute;
  z-index: 999;
  height: 100%;
  width: 300px;
  right: 0;
  background-color: white;

  @media (min-width: ${({theme}) => theme.mobile}) {
    display: none;
  }
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  z-index: 998;
  height: 100%;
  width: 100%;
  background: #000000bb;
`;

const Name = styled.div`
  margin: 0.7rem;
`;

export default NavBar;
