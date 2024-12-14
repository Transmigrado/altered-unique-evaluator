'use client'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import candidates from "./features/candidates";
import positions from "./features/positions";
import areas from './features/areas'
import rootSaga from "@/sagas";

export const sagaMiddleWare = createSagaMiddleware();

export const makeStore = () => {
  const store =  configureStore({
    reducer: {
      candidates,
      positions,
      areas,
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









