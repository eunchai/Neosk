import React from "react";
import { useHistory } from "react-router-dom";
import CartButtonPresenter from "./Presenter";

const CartCircleButton = () => {
  const history = useHistory();
  const goCart = () => {
    history.push("/cart");
    history.go(0)
  };

  return (
    <CartButtonPresenter
      goCart={goCart}
    />
  );
};

export default CartCircleButton;
