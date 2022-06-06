import React from "react";
import { useHistory } from "react-router-dom";
import OutButtonPresenter from "./Presenter";

const MainButton = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
    history.go(0)
  };

  return (
    <OutButtonPresenter
      goHome={goHome}
    />
  );
};

export default MainButton;
