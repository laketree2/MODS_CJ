import React, { useState } from "react";

const TAB_LIST = ["배달·포장", "장보기·쇼핑", "대용량특가", "전국별미"];

function CartHeader() {
  const [activeTab, setActiveTab] = useState("배달·포장");

  return (
    <div className="w-full border-b sticky top-0 bg-white z-20">
      {/* 타이틀 */}
      <div className="text-center font-semibold text-lg py-3">장바구니</div>

      {/* 탭 메뉴 */}
      <div className="flex justify-between px-4 text-sm font-medium text-gray-500">
        {TAB_LIST.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`py-2 ${
              activeTab === tab ? "text-black border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CartHeader;
