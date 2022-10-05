import React from "react";
import { Sidebar, TalentechIcons } from "@talentech/components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { AppRoutes } from "@utils/enums";

const AppSidebar = (props: { toggleSidebar?(): void }) => {
  const { t } = useTranslation();
  const apps: any[] = [];
  const { push } = useHistory();

  return (
    <Sidebar
      labels={{
        moreApps: t("More apps & integrations"),
        myApps: t("My applications"),
      }}
      appSwitcher={apps}
      menu={[
        {
          sectionName: "",
          menuItems: [
            {
              icon: TalentechIcons.BOLD_01_INTERFACE_ESSENTIALS_HOME_HOUSE_1,
              label: "Home",
              onClick: (e) => {
                e.preventDefault();
                push(AppRoutes.Home);
              },
            },
          ],
        },
      ]}
      {...props}
    />
  );
};

export default AppSidebar;
