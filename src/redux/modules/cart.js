import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_ITEM = "DELETE_ITEM";
const SET_TOTAL = "SET_TOTAL";
const PLUS_QTY = "PLUS_QTY";
const MINUS_QTY = "MINUS_QTY";
const PLUS_PRICE = "PLUS_PRICE";
const MINUS_PRICE = "MINUS_PRICE";

const setCart = createAction(SET_CART, (product_list) => ({ product_list }));
const deleteItem = createAction(DELETE_ITEM, (id, product_list) => ({
  id,
  product_list,
}));
const setTotal = createAction(SET_TOTAL, (total) => ({ total }));
const plusQty = createAction(PLUS_QTY, (productId) => ({ productId }));
const minusQty = createAction(MINUS_QTY, (productId) => ({ productId }));
const plusPrice = createAction(PLUS_PRICE, (productId) => ({ productId }));
const minusPrice = createAction(MINUS_PRICE, (productId) => ({ productId }));

const initialState = {
  list: [],
  totalPrice: [],
  quantity: 1,
};

const getCartDB = (Token) => {
  return async function (dispatch, getState, { history }) {
    axios
      .get("http://3.39.23.124:8080/cart", {
        headers: {
          Authorization: `Bearer ${Token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
          // accept: "application/json,",
          // Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setCart(res.data));
        // let product_list = [];
        // res.data.forEach((p) => {
        //   let product = {
        //     productId: p.productId,
        //     name: p.name,
        //     image: p.image,
        //     option: p.option,
        //     quantity: p.quantity,
        //     price: p.price,
        //     serving: p.serving,
        //     productType: p.productType,
        //   };
        //   product_list.push(product);
      })
      // console.log(product_list);
      // let itemtotal = res.data.price * res.data.quantity;
      // console.log(res);
      // console.log(itemtotal); //NaN
      // dispatch(setTotal(itemtotal));
      // })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const deleteItemDB = (pId, pOption, Token) => {
  // console.log("지워주세요!");
  return async function (dispatch, getState, { history }) {
    axios
      .put(
        `http://3.39.23.124:8080/cart/${pId}`,
        {
          option: pOption,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",
            // accept: "application/json,",
            // Authorization: token,
          },
        }
      )
      .then(function (res) {
        dispatch(deleteItem(pId));
        window.alert("삭제가 완료되었습니다.");
        history.replace("/cart");
      })
      .catch(function (err) {
        console.log(err.response);
      });
  };
};

const deleteCartDB = (Token) => {
  return function (dispatch, getState, { histoty }) {
    axios
      .delete("http://3.39.23.124:8080/orders", {
        headers: {
          Authorization: `Bearer ${Token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
          // accept: "application/json,",
          // Authorization: token,
        },
      })
      .then((res) => {
        alert("주문완료! 다음에 또 봬요~~");
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
        let idx = draft.list.lists.findIndex(
          (p) => p.productId === action.payload.productId
        );
        draft.list.lists.splice(idx, 1);
      }),

    [SET_TOTAL]: (state, action) =>
      produce(state, (draft) => {
        draft.totalPrice = action.payload.total;
      }),

    [PLUS_QTY]: (state, action) =>
      produce(state, (draft) => {
        const index = state.list.lists.findIndex(
          (p) => p.productId === action.payload.productId
        );
        draft.list.lists[index].quantity = draft.list.lists[index].quantity + 1;
      }),

    [MINUS_QTY]: (state, action) =>
      produce(state, (draft) => {
        const index = state.list.lists.findIndex(
          (p) => p.productId === action.payload.productId
        );
        draft.list.lists[index].quantity = draft.list.lists[index].quantity - 1;
      }),

    [PLUS_PRICE]: (state, action) => produce(state, (draft) => {}),

    [MINUS_PRICE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setCart,
  setTotal,
  deleteItem,
  deleteCartDB,
  getCartDB,
  deleteItemDB,
  plusQty,
  minusQty,
};

export { actionCreators };
