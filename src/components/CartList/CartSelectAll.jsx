import React from "react";

function CartSelectAll({ checked, onChange }) {
  return (
    <div className="px-4 py-2 flex items-center gap-2 border-b">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="text-sm">전체 선택</span>
    </div>
  );
}

export default CartSelectAll;
