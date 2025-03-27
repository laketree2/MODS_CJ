import styled from "styled-components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CartList from "./pages/cartList/CartList";
import StoreList from "./pages/StoreList";
import MenuList from "./pages/MenuList";
import OptionList from "./pages/OptionList";

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
          <Route path="/storelist" element={<StoreList />} />
          <Route path="/menulist" element={<MenuList />} />
          <Route path="/optionlist" element={<OptionList />} />
        </Routes>
      </ContentContainer>
    </Wrapper>
  );
};

export default App;
