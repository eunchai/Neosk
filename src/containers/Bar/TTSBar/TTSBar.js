import React from "react";
import { useHistory } from "react-router-dom";
import MenuPresenter from "./Presenter";

const CoffeeBar = () => {
  const history = useHistory();
  const onOrder = () => {
    history.push("/cart");
    history.go(0)
  };

  return (
    <MenuPresenter
    onOrder={onOrder}
    />
  );
};

export default CoffeeBar;