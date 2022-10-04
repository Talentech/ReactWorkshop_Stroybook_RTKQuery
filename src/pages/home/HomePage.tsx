import React from "react";
import MainPage from "@pages/main/MainPage";
import { isRoutePersisted, NavigationRehydrator } from "@talentech/login";
import { useHistory } from "react-router-dom";

const HomePage: React.FC = () => {
  return isRoutePersisted() ? (
    <NavigationRehydrator navigationPush={useHistory().push} />
  ) : (
    <MainPage />
  );
};

export default HomePage;
