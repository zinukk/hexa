import axios from "axios";

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
  signup: (username, name, password, passwordCheck) =>
    api.post("/api/signup", {
      username: username,
      password: password,
      passwordCheck: passwordCheck,
      name: name,
    }),
  //로그아웃 요청
  logout: () => api.get("/api/logout"),
};
