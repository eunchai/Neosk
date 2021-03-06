import React from "react";
import { useHistory } from "react-router-dom";
import InButtonPresenter from "./Presenter";

const BackButton = () => {
  const history = useHistory();
  const onBackPage = () => {
    history.goBack()
    // history.go(0)
  };

  return (
    <InButtonPresenter
      onBackPage={onBackPage}
    />
  );
};

export default BackButton;
