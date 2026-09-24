import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileScreensPage } from "./components/MobileScreensPage";

/* Standalone entry. The real site calls this with an onNavigate handler
   that drives its own router; there is no router here, so it is a no-op -
   the only in-page links it drives are "back to home" style exits that
   don't exist in this extract. */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileScreensPage onNavigate={() => {}} />
  </StrictMode>,
);
