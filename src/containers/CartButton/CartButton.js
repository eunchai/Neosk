import React from "react";
import { useHistory } from "react-router-dom";
import OutButtonPresenter from "./Presenter";

const OutButton = () => {
  const history = useHistory();
  const onOrder = () => {
    history.push("/cart");
    history.go(0)
  };

  return (
    <OutButtonPresenter
      onOrder={onOrder}
    />
  );
};

export default OutButton;
