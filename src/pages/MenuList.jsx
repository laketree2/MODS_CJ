import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/Banner/Banner.Style";
import MenuImg from "../../assets/menu.png";

function MenuList() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/optionlist");
  };

  return (
    <S.SBannerWrap onClick={handleClick}>
      <S.SBannerImage src={MenuImg} alt="menu" />
    </S.SBannerWrap>
  );
}

export default MenuList;
