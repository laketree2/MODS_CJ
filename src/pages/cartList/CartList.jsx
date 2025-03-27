import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CartList.Style";
import { cartData as initialData } from "../../data/cartData";
import cartItemImg1 from "../../assets/배달형식.png";
import cartItemImg2 from "../../assets/결제예정금액.png";
function CartList() {
  const navigate = useNavigate();

  const [cartList, setCartList] = useState(initialData);
  const [selectedStores, setSelectedStores] = useState([]);

  const allChecked = selectedStores.length === cartList.length;

  const handleBack = () => {
    navigate(-1);
  };

  const handleToggleStore = (storeId) => {
    setSelectedStores((prev) =>
      prev.includes(storeId)
        ? prev.filter((id) => id !== storeId)
        : [...prev, storeId]
    );
  };

  const handleToggleAll = () => {
    if (allChecked) {
      setSelectedStores([]);
    } else {
      setSelectedStores(cartList.map((store) => store.id));
    }
  };

  const handleDeleteSelected = () => {
    const nextCart = cartList.filter(
      (store) => !selectedStores.includes(store.id)
    );
    setCartList(nextCart);
    setSelectedStores([]);
  };

  const totalPrice = cartList
    .filter((store) => selectedStores.includes(store.id))
    .reduce((acc, store) => acc + store.total, 0);

  return (
    <S.SCartWrap>
      {/* 헤더 */}
      <S.SHeaderWrap>
        <S.SBackBtn onClick={handleBack}>←</S.SBackBtn>
        <S.SHeaderTitle>장바구니</S.SHeaderTitle>
      </S.SHeaderWrap>

      {/* 탭 */}
      <S.Wrap>
        <S.STabMenu>
          {["배달·포장", "장보기·쇼핑", "대용량특가", "전국별미"].map((tab) => (
            <button key={tab} className={tab === "배달·포장" ? "active" : ""}>
              {tab}
            </button>
          ))}
        </S.STabMenu>

        {/* 전체 선택 + 삭제 버튼 */}
        <S.SSelectAll>
          <div className="left">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleToggleAll}
            />
            <span>전체 선택</span>
          </div>
          <button className="delete-btn" onClick={handleDeleteSelected}>
            삭제
          </button>
        </S.SSelectAll>

        {/* 가게별 목록 */}
        {cartList.map((store) => (
          <S.SStoreBlock key={store.id}>
            <S.SStoreHeader>
              <input
                type="checkbox"
                checked={selectedStores.includes(store.id)}
                onChange={() => handleToggleStore(store.id)}
              />
              {store.storeName}
            </S.SStoreHeader>

            <S.SItemImageBox>
              <img src={store.image} alt="상품 이미지" />
            </S.SItemImageBox>
          </S.SStoreBlock>
        ))}

        <S.SItemImageBox>
          <img src={cartItemImg1} alt="상품 이미지" />
        </S.SItemImageBox>

        <S.SItemImageBox>
          <img src={cartItemImg2} alt="상품 이미지" />
        </S.SItemImageBox>
      </S.Wrap>

      {/* 하단 고정 푸터 */}
      <S.SFooter>
        <div className="price">{totalPrice.toLocaleString()}원</div>
        <button type="button" className="order-btn">
          주문하기
        </button>
      </S.SFooter>
    </S.SCartWrap>
  );
}

export default CartList;
