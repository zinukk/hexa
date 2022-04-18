import axios from "axios";

// //1. axios 인터셉터 생성
// export const instance = axios.create({
//   baseURL: "",
//   headers: {
//     "content-type": "application/json; charset=UTF-8",
//     accept: "application/json",
//   },
// });

// //2. 요청 인터셉터
// instance.interceptors.request.use(
//   //요청직전 호출
//   (config) => {
//     const token = sessionStorage.getItem("token");
//     if (token === "") {
//       return config;
//     }
//     // const tokens = Token.split('=')[1];
//     config.headers = {
//       "content-type": "application/json;charset=UTF-8",
//       accept: "application/json",
//       Authorization: `${token}`,
//     };
//     return config;
//   },
//   //에러 전 호출
//   (err) => {
//     console.log(err);
//   }
// );

//document에 쿠키가 잇는지 확인 , 쿠키가 없다면 instance 헤더에는 토큰값이 null로 지정
export const setClient = (token) => {
  const client = axios.create({ baseURL: "" });
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// export default instance;
const api = axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    // Authorization: token,
  },
});

export const apis = {
  test: () => api.get("/"),

  //로그인
  login: (username, password) =>
    api.post("/api/login", { username: username, password: password }),

  // 회원가입 요청
  signup: (Signup_info) => api.post("/user/signup", Signup_info),
  //로그아웃 요청
  logout: () => api.get("/api/logout"),
};
