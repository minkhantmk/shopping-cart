import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = ({ name, brand, size, price, image }) => {
  return (
    <GridItem>
      <img src={image}></img>
      <Info>
        <h3>{name}</h3>
        <h4>{brand}</h4>
        <h4>{size}</h4>
        <h3>NZ${price}</h3>
        <Button
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
        >
          Add to Cart
        </Button>
      </Info>
    </GridItem>
  );
};

const GridItem = styled.div`
  display: flex;
  background-color: white;
  padding: 15px;
  height: auto;

  img {
    width: 25%;
    object-fit: cover;
    padding-right: 20px;
  }
`;

const Info = styled.div`
  width: 75%;
  & > *:nth-child(1) {
    height: 40px;
    padding-bottom: 20px;
  }
  & > *:nth-child(3) {
    padding: 10px 0 30px 0;
  }
  & > *:nth-child(4) {
    padding-top: 30px;
    border-top: 1px solid black;
  }
`;

const Button = styled(motion.button)`
  display: inline-block;
  width: 180px;
  height: 60px;
  margin-top: 2rem;
  background-color: white;
  border: 2px solid black;
  font-size: 1rem;
  cursor: pointer;
`;

export default Card;
