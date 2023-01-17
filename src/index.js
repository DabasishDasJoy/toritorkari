import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <div>
            <Toaster
              toastOptions={{
                className:
                  "text-sm font-semibold rounded-sm px-2 py-1 max-w-xl",
              }}
            />
          </div>
          <App />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
