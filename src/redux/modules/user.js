import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

// 액션
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const setLogin = createAction(LOGIN, (Login) => ({ Login }));
const setLogout = createAction(LOGOUT, (Logout) => ({ Logout }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialState = {};

//미들웨어
//로그인요청
const loginDB = (Login_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("", Login_info)
      .then((res) => {
        alert("로그인 성공");
        console.log(res);
        console.log(res.headers.authorization);
        sessionStorage.setItem("token", res.headers.authorization);
        dispatch(setLogin(Login_info));
        history.push("/");
      })
      .catch((err) => {
        alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        console.log(err.response, "로그인 에러");
      });
  };
};

//회원가입 기능
const signupDB = (Signup_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("", Signup_info)
      .then((res) => {
        alert("가입이 완료되었습니다");
        history.replace("/login");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("회원가입 에러", err.response);
      });
  };
};

// const logoutDB = () => {
//   return function (dispatch, getState, { history }) {
//     apis
//       .logout()
//       .then((res) => {
//         //console.log(res)
//         sessionStorage.clear();
//         dispatch(setLogout());
//         history.push("/login");
//       })
//       .catch((err) => {
//         console.log("로그아웃 에러", err.response);
//       });
//   };
// };

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    // [LOGOUT]: (state, action) =>
    //   produce(state, (draft) => {
    //     sessionStorage.clear();
    //   }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  signupDB,
  loginDB,
  // logoutDB,
  setLogout,
};

export { actionCreators };
