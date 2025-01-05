import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-2xl container mx-auto">
        <RouterProvider router={Router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
