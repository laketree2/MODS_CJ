import React from "react";

function CartItem({ item }) {
  return (
    <div className="border p-3 rounded-lg mb-2">
      <div className="font-medium">{item.name}</div>
      <div className="text-sm text-gray-500">{item.desc}</div>
      <div className="mt-1 text-right font-bold">
        {item.price.toLocaleString()}원
      </div>
    </div>
  );
}

export default CartItem;
