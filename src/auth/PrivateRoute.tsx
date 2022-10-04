import React, { ReactNode } from "react";
import { Redirect, Route, RouteProps, RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { getOidcUser } from "@talentech/login";
import { AppRoutes } from "@utils/enums";
import { User } from "oidc-client";

type PrivateRouteProps = RouteProps & {
  component: ReactNode;
};

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps): JSX.Element | null => {
  const user: User = useSelector(getOidcUser);

  // TODO: Needs to be revalidated
  // if (user === undefined) {
  //   return null;
  // }

  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        !user || user.expired ? (
          <Redirect
            to={{
              pathname: AppRoutes.Home,
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
