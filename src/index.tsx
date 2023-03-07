import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App as Accounts } from "components/AccountIndex/App";
import { store } from "reducers/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Accounts />
    </Provider>
  </StrictMode>
);
