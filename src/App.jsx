import styled from "styled-components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CartList from "./pages/cartList/CartList";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh);
  -webkit-overflow-scrolling: touch;
`;

const App = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartlist" element={<CartList />} />
        </Routes>
      </ContentContainer>
    </Wrapper>
  );
};

export default App;
