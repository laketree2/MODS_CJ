import React from "react";
import { ShoppingCart } from "lucide-react";

function CartBtn() {
  return (
    <button type="button" className="relative">
      <ShoppingCart size={24} className="text-white" />
      <span className="absolute -top-1 -right-1 bg-pink-500 text-xs text-white rounded-full px-1">
        1
      </span>
    </button>
  );
}

export default CartBtn;
