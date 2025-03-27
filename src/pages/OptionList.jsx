import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/Banner/Banner.Style";
import OptionImg from "../../assets/option.png";

function OptionList() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cartlist");
  };

  return (
    <S.SBannerWrap onClick={handleClick}>
      <S.SBannerImage src={OptionImg} alt="배너" />
    </S.SBannerWrap>
  );
}

export default OptionList;
