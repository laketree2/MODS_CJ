import React from "react";
import CartItem from "./CartItem";

function CartStore({ store, isChecked, onToggle }) {
  return (
    <div className="p-4 border-b">
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        <span className="font-semibold">{store.storeName}</span>
      </label>
      {store.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartStore;
