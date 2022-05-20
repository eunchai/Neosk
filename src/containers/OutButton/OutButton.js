import React from "react";
import { useHistory } from "react-router-dom";
import OutButtonPresenter from "./Presenter";

const OutButton = () => {
  const history = useHistory();
  const onOrder = () => {
    history.push("/menu_coffee");
  };

  return (
    <OutButtonPresenter
      onOrder={onOrder}
    />
  );
};

export default OutButton;
