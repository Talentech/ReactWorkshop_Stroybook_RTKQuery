import { getOidcAccessToken, getOidcUser } from "@store/selectors/oidc";
import { oidcUserMock } from "@mocks/oidcUser.mock";
import { RootState } from "@store/store";

describe("Oidc Selectro", () => {
  const mockedStore = {
    oidc: { user: oidcUserMock, isLoadingUser: false },
  } as RootState;

  it("Should return access_token", () => {
    expect(getOidcAccessToken(mockedStore)).toEqual(oidcUserMock.access_token);
  });
  it("Should return User object", () => {
    expect(getOidcUser(mockedStore)).toEqual(oidcUserMock);
  });
});
