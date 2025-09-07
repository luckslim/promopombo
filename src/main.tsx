import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./Router.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme accentColor="yellow" grayColor="sand">
      <Router />
    </Theme>
  </StrictMode>
);
