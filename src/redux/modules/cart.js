import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_ITEM = "DELETE_ITEM";

const setCart = createAction(SET_CART, (product_list) => ({ product_list }));
const deleteItem = createAction(DELETE_ITEM, (id, product_list) => ({
  id,
  product_list,
}));

const initialState = {
  list: [],
  totalPrice: [],
};

const addItemDB = (productId, option, quantity) => {
  return async function (dispatch, getState, { history }) {
    axios
      .post("http://localhost:4000/lists", {
        params: {
          productId: productId,
          option: option,
          quantity: quantity,
        },
      })
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCartDB = () => {
  return async function (dispatch, getState, { history }) {
    axios
      .get("http://localhost:4000/lists")
      .then((res) => {
        console.log(res);
        let product_list = [...res.data];
        console.log(product_list);
        dispatch(setCart(product_list));
      })
      .catch(function (err) {
        console.log(err);
      });
  };
};

const deleteItemDB = (productId) => {
  console.log("지워주세요!");
  return async function (dispatch, getState, { history }) {
    axios
      .delete("http://localhost:4000/lists")
      .then(function (res) {
        dispatch(deleteItem(productId));
        window.alert("삭제가 완료되었습니다.");
        history.replace("/cart");
      })
      .catch(function (err) {
        console.log(err.response);
      });
  };
};

const deleteCartDB = () => {
  console.log("다 지워져라ㅏㅏ");
  return async function (dispatch, getState, { histoty }) {
    axios
      .delete("http://localhost:4000/lists")
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.product_list;
      }),
    [DELETE_ITEM]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.id === action.payload.productId
        );
        draft.list.splice(idx, 1);
      }),
  },
  initialState
);

const actionCreators = {
  setCart,
  addItemDB,
  deleteItem,
  deleteCartDB,
  getCartDB,
  deleteItemDB,
};

export { actionCreators };
