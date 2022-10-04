import React from "react";
import { Sidebar } from "@talentech/components";
import { useTranslation } from "react-i18next";

const AppSidebar = (props: { toggleSidebar?(): void }) => {
  const { t } = useTranslation();
  const apps: any[] = [];
  const menu: any[] = [];

  return (
    <Sidebar
      labels={{
        moreApps: t("More apps & integrations"),
        myApps: t("My applications"),
      }}
      appSwitcher={apps}
      menu={menu}
      {...props}
    />
  );
};

export default AppSidebar;
