import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

// 액션
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";

// 액션 크리에이터
const setLogin = createAction(LOGIN, (Login) => ({ Login }));
const setLogout = createAction(LOGOUT, (Logout) => ({ Logout }));
// 초기값
const initialState = {};

//미들웨어
//로그인요청
const loginDB = (Login_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post(`http://3.39.23.124:8080/user/login`, Login_info)
      .then((res) => {
        console.log(res);
        console.log(res.headers.authorization.split(" ")[1]);
        sessionStorage.setItem(
          "token",
          res.headers.authorization.split(" ")[1]
        );
        dispatch(setLogin(Login_info));
        history.push("/");
      })
      .catch((err) => {
        alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        console.log(err.response, "로그인 에러");
      });
  };
};

const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: `http://3.39.23.124:8080/user/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res.data); // 토큰이 넘어올 것임

        const KAKAO_TOKEN = res.data.accessToken;

        sessionStorage.setItem("token", KAKAO_TOKEN); //예시로 로컬에 저장함

        history.replace("/"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

//회원가입 기능
const signupDB = (Signup_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.39.23.124:8080/user/signup", Signup_info, {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
          // Authorization: token,
        },
      })
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
  kakaoLogin,
};

export { actionCreators };
