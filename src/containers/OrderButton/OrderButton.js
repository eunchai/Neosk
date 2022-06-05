import React from "react";
import { useHistory } from "react-router-dom";
import OutButtonPresenter from "./Presenter";

const OrderButton = () => {
  const history = useHistory();
  const onOrder = () => {
    history.push("/order");
    history.go(0)
  };

  return (
    <OutButtonPresenter
      onOrder={onOrder}
    />
  );
};

export default OrderButton;
