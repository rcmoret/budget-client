import React, { useImperativeHandle, useState } from "react";

import type { IAccountShow } from "types/account";
import { updateAccountAction } from "actions/account";
import { IFormEvent, TextInput } from "components/shared/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers/store";

const Account = (props: IAccountShow) => {
  const { account } = props;
  const { slug } = { ...account, ...account.updatedAttributes };
  const dispatch = useDispatch();
  const onChange = (event: IFormEvent): void => {
    dispatch(
      updateAccountAction({
        key: account.key,
        updatedAttributes: { [event.inputName]: event.value },
      })
    );
  };
  return (
    <div>
      <div>{account.name}</div>
      <TextInput name="slug" value={slug} onChange={onChange} />
    </div>
  );
};

export const App = () => {
  const { collection, includesArchived } = useSelector(
    (state: RootState) => state.accounts
  );
  const dispatch = useDispatch();

  return (
    <div>
      {collection.map((account) => (
        <Account account={account} />
      ))}
    </div>
  );
};
