type TAccountUpdatedAttributes = {
  slug?: string;
  name?: string;
  priority?: number;
  isCashFlow?: boolean;
  isArchived?: boolean;
  archivedAt?: Date | null;
};

export type TAccount = {
  key: string;
  slug: string;
  name: string;
  priority: number;
  isCashFlow: boolean;
  isArchived: boolean;
  archivedAt: Date | null;
  updatedAttributes?: TAccountUpdatedAttributes;
};

export type TAccountIndex = {
  collection: TAccount[];
  includesArchived: boolean;
  isLoading: boolean;
};

export interface IAccountShow {
  account: TAccount;
}

type TAccountActionType = "account/UPDATE_ACCOUNT";

export type TAccountActionPayload = {
  key: string;
  updatedAttributes: TAccountUpdatedAttributes;
};

export type TAccountAction = {
  type: TAccountActionType;
  payload: TAccountActionPayload;
};
