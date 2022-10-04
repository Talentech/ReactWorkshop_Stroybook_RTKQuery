import { createSelector } from "reselect";
import { User } from "oidc-client";
import { OidcStateShape } from "oidc-types";
import { RootState } from "@store/store";

const oidcSelector = (state: RootState): OidcStateShape => state.oidc;

export const getOidcUser = createSelector(
  oidcSelector,
  (oidc): User | undefined => oidc.user || undefined
);

export const getOidcUserId = createSelector(
  oidcSelector,
  (oidc) => oidc.user.profile.sub
);

export const getOidcAccessToken = createSelector(
  oidcSelector,
  (oidc): string => oidc?.user?.access_token
);

export const getOidcLanguage = createSelector(
  oidcSelector,
  (oidc): string =>
    oidc?.user?.profile?.preferred_languages?.slice(0, 2) || "en"
);

export const getOidcLocale = createSelector(
  oidcSelector,
  (oidc) => oidc.user.profile.preferred_languages || "en-US"
);
