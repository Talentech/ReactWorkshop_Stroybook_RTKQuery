import React from "react";
import { useSelector } from "react-redux";
import { ApplicationBar, getAvatarUrlBySha256 } from "@talentech/components";
import { getOidcUser, getOidcUserId } from "@talentech/login";
import { User } from "oidc-client";

const Header = (props: { toggleSidebar?(): void }) => {
  const user: User = useSelector(getOidcUser);
  const userId: string = useSelector(getOidcUserId);

  return (
    <ApplicationBar
      firstName={user.profile.name}
      lastName=""
      menu={[]}
      toolboxItems={[]}
      toggleSidebar={props.toggleSidebar}
      // activeWorkspace={tenants?.find((t) => t.isActive)?.name}
      avatarUrl={getAvatarUrlBySha256(userId)}
    />
  );
};

export default Header;
