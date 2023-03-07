import { TAccountAction, TAccountActionPayload } from "types/account";

export const updateAccountAction = (
  payload: TAccountActionPayload
): TAccountAction => ({ type: "account/UPDATE_ACCOUNT", payload });
