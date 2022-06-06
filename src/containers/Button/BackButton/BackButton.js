import React from "react";
import { useHistory } from "react-router-dom";
import BackButtonPresenter from "./Presenter";

const BackButton = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
    history.go(0)
  };

  return (
    <BackButtonPresenter
      goBack={goBack}
    />
  );
};

export default BackButton;
