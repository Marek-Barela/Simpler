import { createAction } from "typesafe-actions";

export const switchMenuSidebar = createAction("menu/SWITCH_MENU_SIDEBAR", action => {
  return (payload: boolean) => action(payload);
});
