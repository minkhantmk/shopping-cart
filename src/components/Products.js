import React from "react";
import Card from "./Card";
import styled from "styled-components";
import CardCollection from "./CardCollection";
import decks from "../data/decks";

const Products = () => {
  return (
    <Container>
      <CardCollection collection={decks} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export default Products;
