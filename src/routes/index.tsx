import { hot } from "react-hot-loader/root";
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import ErrorPage from "@pages/error/ErrorPage";
import { AppRoutes } from "@utils/enums";
import People from "@pages/people/People";

const Routes = (): JSX.Element => (
  <>
    <Route path={AppRoutes.Home} exact component={HomePage} />
    <Route path={AppRoutes.People} component={People} />
    <Route path={AppRoutes.Error} component={ErrorPage} />
  </>
);

export default hot(Routes);
