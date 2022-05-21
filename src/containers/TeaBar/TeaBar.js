import React from "react";
import { useHistory } from "react-router-dom";
import MenuPresenter from "./Presenter";

const TeaBar = () => {
  const history = useHistory();
  const goCoffee = () => {
    history.push("/menu_coffee");
    history.go(0)
  };
  const goTea = () => {
    history.push("/menu_tea");
    history.go(0)
  };
  const goDessert = () => {
    history.push("/menu_dessert");
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

export default TeaBar;