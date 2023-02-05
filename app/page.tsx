"use client";
import type { NextPage } from "next";
import { store, persistor } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import App from "../components/App";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </QueryClientProvider>
  );
}
