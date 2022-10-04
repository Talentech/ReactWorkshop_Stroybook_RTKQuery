import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import Routes from "./routes";
import store from "@store/store";
import userManager from "@auth/UserManager";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "@components/Header/Header";
import { LayoutGrid, talentechTheme } from "@talentech/components";
import "@talentech/components/build/index.css";
import { enhanceApiRequestsWithAccessToken } from "@utils/httpUtils";
import AppSidebar from "@components/AppSidebar/AppSidebar";
import Notifier from "@components/Notifier/Notifier";
import SnackbarProvider from "react-simple-snackbar";
import { AuthProvider, NavigationPersistor } from "@talentech/login";
import { AppRoutes } from "@utils/enums";

enhanceApiRequestsWithAccessToken();

ReactDOM.render(
  <ThemeProvider theme={talentechTheme}>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <SnackbarProvider>
          <Router>
            <>
              <NavigationPersistor />
              <AuthProvider
                loadingScreen={{
                  title: "Signing in",
                  userManager,
                  subtitle:
                    "We need to make last checks and you'll be ready to go :)",
                }}
                oidcCallback={{
                  route: AppRoutes.OidcCallback,
                  oidCallbackErrorRoute: AppRoutes.Error,
                }}
              >
                <LayoutGrid header={<Header />} sidebar={<AppSidebar />}>
                  <Routes />
                </LayoutGrid>
                <Notifier />
              </AuthProvider>
            </>
          </Router>
        </SnackbarProvider>
      </OidcProvider>
    </Provider>
  </ThemeProvider>,
  document.getElementById("app")
);
