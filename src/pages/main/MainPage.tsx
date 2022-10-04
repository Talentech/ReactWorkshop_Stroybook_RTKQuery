import React, { useEffect } from "react";
import { PageTitle } from "@talentech/components";
import { useSelector } from "react-redux";
import { getOidcLanguage } from "@store/selectors/oidc";
import i18n from "../../i18n";

const MainPage: React.FC = () => {
  const oidcLang = useSelector(getOidcLanguage);
  useEffect(() => {
    i18n.changeLanguage(oidcLang);
  }, [oidcLang]);

  return <PageTitle title="React Workshop" />;
};

export default MainPage;
