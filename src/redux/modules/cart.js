import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const SET_CART = "SET_CART";
const DELETE_CART= "DELETE_CART";

const setCart = createAction(SET_CART, (product_list) => ({product_list}));
const deleteCart = createAction(DELETE_CART, (id, product_list) => ({
    id,
    product_list,
}));

const initialState = {
    list: [],
    totalPrice: [],
};

const getCartDB = () => {
    return async function (dispatch, getState, {history}) {
        axios
        .get("http://localhost/cart",{})
        .then(function (res) {
            let product_list = [...res.data];
            dispatch(setCart(product_list))
        })
        .catch(function (err) {
            console.log(err);
        });
    };
};

const deleteCartDB = (id) => {
    return async function (dispatch, getState, {history}) {
        axios
        .delete("http://localhost/cart", id)
        .then(function(res){
            window.alert("삭제가 완료되었습니다.");
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export default handleActions(
    {
        [SET_CART]: (state, action) =>
        produce(state, (draft) => {
            draft.list = action.payload.product_list;
        }),
    }
)