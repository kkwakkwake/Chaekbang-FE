import { all, fork } from "redux-saga/effects";

// 나머지 사가도 있다고 가정
import authSaga from "./authSaga";
import userSaga from "./userSaga";
import postSaga from "./postSaga";
import chatSaga from "./chatSaga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga), fork(postSaga), fork(chatSaga)]);
}
