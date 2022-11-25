import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import type { AnyAction, CombinedState } from "@reduxjs/toolkit";

// reducers ( 나머지 리듀서도 있다고 가정 )
import authReducer, { AuthStateType } from "./authReducer";
import userReducer, { UserStateType } from "./userReducer";
import postReducer, { PostStateType } from "./postReducer";
import chatReducer, { ChatStateType } from "./chatReducer";

// actions ( 하나의 파일에서 import 해주기 위해서 export ~ from 사용 )
export { authActions } from "./authReducer";
export { userActions } from "./userReducer";
export { postActions } from "./postReducer";
export { chatActions } from "./chatReducer";

type ReducerState = {
  auth: AuthStateType;
  post: PostStateType;
  user: UserStateType;
  chat: ChatStateType;
};

// 원래 "rootReducer"로 합쳐줄 필요 없이 "configureStore()"에서 합칠 수 있지만 "HYDRATE"를 위해서 사용
const rootReducer = (
  state: any,
  action: AnyAction
): CombinedState<ReducerState> => {
  switch (action.type) {
    // SSR을 위해서 사용 ( "next.js"의 "getServerSideProps()" )
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        auth: authReducer,
        user: userReducer,
        post: postReducer,
        chat: chatReducer,
      })(state, action);
  }
};

export default rootReducer;
