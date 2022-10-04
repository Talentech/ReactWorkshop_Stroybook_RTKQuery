// import { getCurrentUserRole } from "@store/features/utils/utilsSlice";
// import React from "react";
// import { useSelector } from "react-redux";
// import rules, { RBACActions, RBACRoles } from "../rbac-rules";

// interface IRBACProps {
//   action: RBACActions;
//   data?: any;
//   yes(): React.ReactElement;
//   no?(): React.ReactElement;
//   context?: RBACRoles;
// }

// export const rbacCheck = (
//   role: RBACRoles,
//   action: RBACActions,
//   data: any = {}
// ) => {
//   const permissions = rules[role];
//   if (!permissions) {
//     // role is not present in the rules
//     return false;
//   }

//   const staticPermissions = permissions.static;

//   if (staticPermissions && staticPermissions.includes(action)) {
//     // static rule not provided for action
//     return true;
//   }

//   const dynamicPermissions = permissions.dynamic;

//   if (dynamicPermissions) {
//     const permissionCondition = dynamicPermissions[action];
//     if (!permissionCondition) {
//       // dynamic rule not provided for action
//       return false;
//     }

//     return permissionCondition(data);
//   }
//   return false;
// };

// const RBAC: React.FC<IRBACProps> = (props) => {
//   const userRole = useSelector(getCurrentUserRole);
//   const role = props.context || userRole;
//   return rbacCheck(role, props.action, props.data)
//     ? props.yes()
//     : props?.no?.() || null;
// };

// export default RBAC;
