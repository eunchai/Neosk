import React from "react";
import { useHistory } from "react-router-dom";
import InButtonPresenter from "./Presenter";

const InButton = () => {
  const history = useHistory();
  const onOrder = () => {
    history.push("/menu_coffee");
  };

  return (
    <InButtonPresenter
      onOrder={onOrder}
    />
  );
};

export default InButton;
