import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardCollection = ({ collection }) => {
  return (
    <CardGrid>
      {collection.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          brand={card.brand}
          size={card.size}
          price={card.price}
          image={card.image}
        />
      ))}
    </CardGrid>
  );
};

const CardGrid = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default CardCollection;
