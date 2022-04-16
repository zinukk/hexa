import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialState = {};

//미들웨어
//로그인
const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    // 로그인 api
    apis
      .login(username, password)
      .then((res) => {
        const token = res.headers.authorization.split(" ")[1];
        console.log(res, "로그인 성공!");
        sessionStorage.setItem("JWT", token);

        //아래는 유저네임이 필요한 경우에만 사용
        //const username = JSON.parse(atob(token.split(".")[1])).USER_NAME;
        //console.log(username)

        dispatch(setUser({ username: username }));
        history.push("/");
      })
      .catch((err) => {
        window.alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        console.log(err.response, "로그인 에러");
        //history.replace('/login');
      });
  };
};

//회원가입 기능
const signupDB = (username, name, password, passwordCheck) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(username, name, password, passwordCheck)
      .then((res) => {
        window.alert("가입이 완료되었습니다");
        history.replace("/login");
        console.log(res);
      })
      .catch((err) => {
        console.log("회원가입 에러", err.response);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        window.sessionStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  signupDB,
  loginDB,
};

export { actionCreators };
