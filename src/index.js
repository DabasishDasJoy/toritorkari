import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import CartProvider from "./Contexts/CartProvider/CartProvider";
import ProductsProvider from "./Contexts/ProductsProvider/ProductsProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ProductsProvider>
          <AuthProvider>
            <CartProvider>
              <div>
                <Toaster
                  toastOptions={{
                    className:
                      "text-sm font-semibold rounded-sm px-2 py-1 max-w-xl",
                  }}
                />
              </div>
              <App />
            </CartProvider>
          </AuthProvider>
        </ProductsProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
