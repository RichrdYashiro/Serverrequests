import { createStore, combineReducers, applyMiddleware } from "redux";

import { taskReducer } from "./reducers/taskReducer";
import { uiReducer } from "./reducers/uiReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
	taskState: taskReducer,
	uiState: uiReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
