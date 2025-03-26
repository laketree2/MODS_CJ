import React from "react";

function CartFooter({ total }) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] bg-white border-t p-4 flex justify-between items-center">
      <div className="font-semibold">{total.toLocaleString()}원</div>
      <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
        주문하기
      </button>
    </div>
  );
}

export default CartFooter;
