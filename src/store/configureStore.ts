import createSagaMiddleware, { Task } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import { Store } from "redux";

// Next Redux Toolkit Saga를 사용할때는
// confugureStore에서 강제로 sagaTask를 만들어주기 위함
interface SagaStore extends Store {
  sagaTask?: Task;
}

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NEXT_PUBLIC_NODE_ENV === "development",
  });
  // Next Redux Toolkit 에서 saga를 사용해야할 때
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NEXT_PUBLIC_NODE_ENV === "development",
});

const store = createStore();
// "useSelector()"에서 사용하는 타입
export type RootState = ReturnType<typeof store.getState>;

// "_app.ts"에서 "wrapper.withRedux()"로 감싸주면 됨
export default wrapper;
