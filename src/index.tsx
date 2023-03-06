import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import {
  App as Accounts,
  TAccountIndexResponse,
} from "./components/AccountIndex/App";
// } from "@components/AccountIndex/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const accountProps = {
  includesArchived: false,
  accounts: [
    {
      name: "First Horizon",
      slug: "first",
      priority: BigInt(10),
      isCashFlow: true,
      isArchived: false,
      archivedAt: null,
    },
  ],
};

root.render(
  <StrictMode>
    <App />
    <Accounts {...accountProps} />
  </StrictMode>
);
