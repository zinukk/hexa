import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

const initialState = {};

export default handleActions({}, initialState);

const actionCreators = {};

export { actionCreators };
