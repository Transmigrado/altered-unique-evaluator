'use client'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import cards from "./features/cards";
import connect from "./features/connect";
import rootSaga from "@/sagas";

export const sagaMiddleWare = createSagaMiddleware();

export const makeStore = () => {
  const store =  configureStore({
    reducer: {
      cards,
      connect
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
  });

  sagaMiddleWare.run(rootSaga);
  return store;
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']









