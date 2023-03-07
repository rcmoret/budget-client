import { TAccountAction, TAccountIndex } from "types/account";

const initialState: TAccountIndex = {
  includesArchived: false,
  isLoading: true,
  collection: [
    {
      key: "123456789abc",
      name: "First Horizon",
      slug: "first",
      priority: 10,
      isCashFlow: true,
      isArchived: false,
      archivedAt: null,
      updatedAttributes: {},
    },
  ],
};

export const reducer = (state = initialState, action: TAccountAction) => {
  const { type, payload } = action;

  switch (type) {
    case "account/UPDATE_ACCOUNT":
      return {
        ...state,
        collection: state.collection.map((account) => {
          if (account.key === payload.key) {
            return {
              ...account,
              updatedAttributes: {
                ...account.updatedAttributes,
                ...payload.updatedAttributes,
              },
            };
          } else {
            return account;
          }
        }),
      };
    default:
      return state;
  }
};
