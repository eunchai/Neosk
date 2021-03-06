import React from "react";
import { useHistory } from "react-router-dom";
import InButtonPresenter from "./Presenter";

const InButton = () => {
  const history = useHistory();
  const onOrder = () => {
    history.push("/tts/menu");
    history.go(0)
  };

  return (
    <InButtonPresenter
      onOrder={onOrder}
    />
  );
};

export default InButton;
