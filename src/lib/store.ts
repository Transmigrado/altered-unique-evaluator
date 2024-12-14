'use client'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import cards from "./features/cards";
import rootSaga from "@/sagas";

export const sagaMiddleWare = createSagaMiddleware();

export const makeStore = () => {
  const store =  configureStore({
    reducer: {
      cards
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
  });

  sagaMiddleWare.run(rootSaga);
  return store;
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']









