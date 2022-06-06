import React from "react";
import { useHistory } from "react-router-dom";
import MenuPresenter from "./Presenter";

const DessertBar = () => {
  const history = useHistory();
  const goCoffee = () => {
    history.push("/menu_drinks");
    history.go(0)
  };
  const goTea = () => {
    history.push("/menu_food");
    history.go(0)
  };
  const goDessert = () => {
    history.push("/menu_merchandise");
    history.go(0)
  };

  return (
    <MenuPresenter
      goCoffee={goCoffee}
      goTea={goTea}
      goDessert={goDessert}
    />
  );
};

export default DessertBar;