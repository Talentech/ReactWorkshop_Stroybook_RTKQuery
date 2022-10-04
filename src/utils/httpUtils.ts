import Axios from "axios";
import { apiUrl } from "./urlsUtils";
import { getOidcAccessToken } from "@store/selectors/oidc";
import store from "@store/store";

export const enhanceApiRequestsWithAccessToken = () =>
  Axios.interceptors.request.use(
    (config) => {
      if ((config.url as string).includes(apiUrl)) {
        config.headers.authorization = `Bearer ${getOidcAccessToken(
          store.getState()
        )}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
