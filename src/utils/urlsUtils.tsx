import sha256 from "crypto-js/sha256";

export const apiUrl = process.env.EMPLOYEE_API_URL;

export const getAvatarUrlBySha256 = (data: string): string =>
  `${process.env.PROFILE_PICTURE_URL}/${sha256(data).toString().toLowerCase()}`;

export const openUrlInNewTab = (url: string): void => {
  const browserWindow = window.open(url, "_blank");
  browserWindow.focus();
};
