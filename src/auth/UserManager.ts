import { oidcUtils } from "@talentech/login";

const apiScopes = [
  "talentech-tmv2-employee-portal-scope",
  "talentech-organization-api-scope",
  "talentech-analytics-scope",
  "talentech-auditlogs-scope",
  "talentech-notification-api-scope",
  "talentech-documents-api-scope",
  "talentech-dashboard-api-scope",
  "talentech-imports-api-scope",
  "talentech-roles-api-scope",
  "talentech-custom-fields-api",
];

const userManager = oidcUtils.createOidcUserManager(
  {
    client_id: "talentech-peoplecore-client-app",
  },
  apiScopes
);

export default userManager;
