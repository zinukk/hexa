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

