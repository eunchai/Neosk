import React from "react";
import DrinksPresenter from "./DrinksPresenter";
import { useHistory } from "react-router-dom";

const Drinks = () => {
    const history = useHistory();
    const onDetail = () => {
    history.push("/tts/detail");
    history.go(0)
  };

  return (
    <DrinksPresenter
      onClickDetail={onDetail}
    />
  );
};

export default Drinks;
