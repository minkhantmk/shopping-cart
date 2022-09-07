import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroImage
        src="https://images.unsplash.com/photo-1589529220923-8e72f4256b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Skateboarding image"
      />
      <Title>
        <h1>Welcome to SkateShop</h1>
        <h2>_Offering the highest quality skate equipment</h2>
        <Button
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
          href="/products"
        >
          Shop Now
        </Button>
      </Title>
    </motion.div>
  );
};

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 60vh;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 40vh;
  }
`;

const Title = styled.div`
  padding: 1rem;
  max-width: 900px;
  margin: auto;

  * {
    padding: 0.4rem 0;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  left: -2px;
  margin: 1rem 0;
  border: 2px solid black;
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
  cursor: pointer;
  text-decoration: none;
`;

export default Home;
