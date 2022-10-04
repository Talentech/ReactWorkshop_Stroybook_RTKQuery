// import userManager from "@auth/UserManager";
// import {
//   fetchUserRoles,
//   getCurrentUserRole,
// } from "@store/features/utils/utilsSlice";
// import {
//   Button,
//   SplashScreen,
//   TalentechSvgImages,
// } from "@talentech/components";
// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";

// const RBACProvider: React.FC = (props) => {
//   const dispatch = useDispatch();
//   const role = useSelector(getCurrentUserRole);
//   const { t } = useTranslation();
//   useEffect(() => {
//     dispatch(fetchUserRoles());
//   }, []);

//   if (role === null) {
//     return (
//       <SplashScreen
//         image={TalentechSvgImages.MAGNIFIERUSER}
//         productName={process.env.REACT_APP_ID}
//         subtitle={t("Hang on, while we make final touches.")}
//         title={t("Almost There")}
//       />
//     );
//   }

//   return role ? (
//     <>{props.children}</>
//   ) : (
//     <>
//       <SplashScreen
//         image={TalentechSvgImages.NOTENANTSPECIFIEDERROR}
//         productName={process.env.REACT_APP_ID}
//         title={t("Something Missing")}
//         subtitle={t("You do not have any role assigned.")}
//         isFullPage={true}
//         customComponent={
//           <Button
//             label={t("Logout")}
//             onClick={() => userManager.signoutRedirect()}
//           />
//         }
//       />
//     </>
//   );
// };

// export default RBACProvider;
