declare module "oidc-types" {
  import { User } from "oidc-client";

  export interface OidcStateShape {
    user?: User;
    isLoadingUser: boolean;
  }
}
