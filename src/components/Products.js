import React from "react";
import styled from "styled-components";
import CardCollection from "./CardCollection";
import decks from "../data/decks";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Container>
      <ul>
        <Link to="/">
          <li>Decks</li>
        </Link>
        <Link to="/products">
          <li>Completes</li>
        </Link>
      </ul>
      <CardCollection collection={decks} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray};

  & > * {
    margin: 20px 20px 20px 0px;
  }

  li {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    background-color: white;
  }
`;

export default Products;
