import React from "react";
import { useHistory } from "react-router-dom";
import MainPresenter from "./MainPresenter";

const Main = () => {
    const history = useHistory();
    const goTTS = () => {
        history.push("/tts/menu");
        history.go(0)
    }

    return <MainPresenter 
    goTTS = {goTTS}/>;
};

export default Main;