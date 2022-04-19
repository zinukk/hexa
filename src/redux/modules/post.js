import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

// 액션
const GET_POST = "GET_POST";
const GET_ONE_POST = "GET_ONE_POST";

// 액션 크레이터
// const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const getOnePost = createAction(GET_ONE_POST, (one_post) => ({ one_post }));

//초기값
const initialState = {};

//미들웨어
const sendpostDB = (Order_info) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("", Order_info)
      .then((res) => {
        console.log(res.data);
        alert("상품이 장바구니에 담겼습니다!");
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
};

const getpostDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("")
      .then((res) => {
        dispatch(getPost(res.data));
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
};

const getOnePostDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("")
      .then((res) => {
        console.log(res.data);
        dispatch(getOnePost(res.data));
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
};

//리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload.post_list;
      }),
    [GET_ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.one_post = action.payload.one_post;
      }),
  },
  initialState
);

const actionCreators = {
  getOnePost,
  getOnePostDB,
  getPost,
  getpostDB,
  sendpostDB,
};

export { actionCreators };
