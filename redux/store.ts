import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userInformation"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore() {
  return createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

const store = setupStore();
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
