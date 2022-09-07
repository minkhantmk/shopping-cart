import React from "react";
import styled from "styled-components";

const Card = ({ name, brand, size, price, image }) => {
  return (
    <GridItem>
      <img src={image}></img>
      <Info>
        <h3>{name}</h3>
        <h4>{brand}</h4>
        <h4>{size}</h4>
        <h3>NZ${price}</h3>
      </Info>
    </GridItem>
  );
};

const GridItem = styled.div`
  display: flex;
  background-color: white;
  padding: 15px;
  height: 200px;

  img {
    height: 100%;
    width: 25%;
    object-fit: cover;
    padding-right: 20px;
  }
`;

const Info = styled.div`
  width: 75%;
  & > *:nth-child(1) {
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

export default Card;
