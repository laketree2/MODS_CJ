import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/Banner/Banner.Style";
import StoreImg from "../../assets/store.png";

function StoreList() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menulist");
  };

  return (
    <S.SBannerWrap onClick={handleClick}>
      <S.SBannerImage src={StoreImg} alt="배너" />
    </S.SBannerWrap>
  );
}

export default StoreList;
