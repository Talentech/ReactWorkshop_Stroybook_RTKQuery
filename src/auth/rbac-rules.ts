// Role-Based Access Control
// Convention: RESOURCE__ACTION
// Types: static / dynamic

export enum RBACActions {
  EMPLOYEE__ADD,
  EMPLOYEE__DELETE,
  EMPLOYEE__RESIGN,
  EMPLOYEE__UNDRAFT,
  EMPLOYEE__RESIGN_CANCELATION,

  EMPLOYEE_DETAILS__EDIT_WORK_INFORMATIONS,
  EMPLOYEE_DETAILS__EDIT_PERSONAL_INFORMATIONS,

  POSITIONS__ADD,
  POSITIONS__DRAG_N_DROP,
  POSITIONS__EDIT_MENU,
  POSITIONS__EDIT_MENU_ALL,
  POSITIONS__DETACH,

  ORGANIZATION_ENTITIES__EDIT_MENU,
  ORGANIZATION_ENTITIES__DRAG_N_DROP,
  ORGANIZATION_ENTITIES__ADD_NEW,

  CONTRACTS__ADD_NEW,

  MAIN_MENU__ORGANIZATION_ENITITIES,
  MAIN_MENU_ORGANIZATION_ENITITIES__LEGAL_ENTITIES,
  MAIN_MENU_ORGANIZATION_ENITITIES__DEPARTMENTS,
  MAIN_MENU_ORGANIZATION_ENITITIES__LOCATIONS,
  MAIN_MENU__MANAGEMENET,
  MAIN_MENU_MANAGEMENET__POSITIONS,
  MAIN_MENU_MANAGEMENET__EMPLOYEES,
  MAIN_MENU__ADMINISTRATION,
  MAIN_MENU__SUPPORT,
}

export enum RBACRoles {
  EMPLOYEE = "Employee",
  MANAGER = "Manager",
  ADMIN = "Admin",
}

type RBACRules = Record<
  RBACRoles,
  {
    static?: RBACActions[];
    dynamic?: Record<RBACActions, (args: any) => boolean>;
  }
>;

const rules: RBACRules = {
  [RBACRoles.EMPLOYEE]: {
    static: [
      RBACActions.MAIN_MENU__MANAGEMENET,
      RBACActions.MAIN_MENU_MANAGEMENET__POSITIONS,

      RBACActions.EMPLOYEE_DETAILS__EDIT_PERSONAL_INFORMATIONS,
    ],
  },
  [RBACRoles.MANAGER]: {
    static: [
      RBACActions.EMPLOYEE__ADD,
      RBACActions.EMPLOYEE__DELETE,
      RBACActions.EMPLOYEE__RESIGN,
      RBACActions.EMPLOYEE__RESIGN_CANCELATION,
      RBACActions.EMPLOYEE__UNDRAFT,
      RBACActions.POSITIONS__DRAG_N_DROP,
      RBACActions.POSITIONS__EDIT_MENU,

      RBACActions.CONTRACTS__ADD_NEW,

      RBACActions.POSITIONS__ADD,

      RBACActions.MAIN_MENU__MANAGEMENET,
      RBACActions.MAIN_MENU_MANAGEMENET__POSITIONS,
      RBACActions.MAIN_MENU_MANAGEMENET__EMPLOYEES,
      RBACActions.MAIN_MENU__ORGANIZATION_ENITITIES,
      RBACActions.MAIN_MENU_ORGANIZATION_ENITITIES__DEPARTMENTS,
      RBACActions.MAIN_MENU_ORGANIZATION_ENITITIES__LEGAL_ENTITIES,
      RBACActions.MAIN_MENU_ORGANIZATION_ENITITIES__LOCATIONS,

      RBACActions.EMPLOYEE_DETAILS__EDIT_WORK_INFORMATIONS,
      RBACActions.EMPLOYEE_DETAILS__EDIT_PERSONAL_INFORMATIONS,
    ],
  },
  [RBACRoles.ADMIN]: {
    static: [
      RBACActions.EMPLOYEE__ADD,
      RBACActions.EMPLOYEE__DELETE,
      RBACActions.EMPLOYEE__RESIGN,
      RBACActions.EMPLOYEE__RESIGN_CANCELATION,
      RBACActions.EMPLOYEE__UNDRAFT,

      RBACActions.POSITIONS__DRAG_N_DROP,
      RBACActions.POSITIONS__EDIT_MENU,
      RBACActions.POSITIONS__EDIT_MENU_ALL,
      RBACActions.POSITIONS__ADD,
      RBACActions.POSITIONS__DETACH,

      RBACActions.ORGANIZATION_ENTITIES__DRAG_N_DROP,
      RBACActions.ORGANIZATION_ENTITIES__EDIT_MENU,
      RBACActions.ORGANIZATION_ENTITIES__ADD_NEW,

      RBACActions.CONTRACTS__ADD_NEW,

      RBACActions.MAIN_MENU__MANAGEMENET,
      RBACActions.MAIN_MENU_MANAGEMENET__POSITIONS,
      RBACActions.MAIN_MENU_MANAGEMENET__EMPLOYEES,
      RBACActions.MAIN_MENU__ORGANIZATION_ENITITIES,
      RBACActions.MAIN_MENU_ORGANIZATION_ENITITIES__DEPARTMENTS,
      RBACActions.MAIN_MENU_ORGANIZATION_ENITITIES__LEGAL_ENTITIES,
      RBACActions.MAIN_MENU_ORGANIZATION_ENITITIES__LOCATIONS,
      RBACActions.MAIN_MENU__ADMINISTRATION,
      RBACActions.MAIN_MENU__SUPPORT,

      RBACActions.EMPLOYEE_DETAILS__EDIT_WORK_INFORMATIONS,
      RBACActions.EMPLOYEE_DETAILS__EDIT_PERSONAL_INFORMATIONS,
    ],
  },
};

export default rules;
