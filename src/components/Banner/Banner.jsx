// import React from "react";
// import * as S from "./Banner.Style";
// import bannerImg from "../../assets/main.jpeg";

// function Banner() {
//   return (
//     <S.SBannerWrap>
//       <S.SBannerImage src={bannerImg} alt="배너" />
//     </S.SBannerWrap>
//   );
// }

// export default Banner;
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Banner.Style";
import bannerImg from "../../assets/main.jpeg";

function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/storelist");
  };

  return (
    <S.SBannerWrap onClick={handleClick}>
      <S.SBannerImage src={bannerImg} alt="배너" />
    </S.SBannerWrap>
  );
}

export default Banner;
