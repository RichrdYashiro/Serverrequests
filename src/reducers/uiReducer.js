const initialState = {
	isLoading: false,
	blockButton: false,
	newTaskTitle: "",
	searchPhrase: "",
	sortAlphabetically: false,
};

export const uiReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_LOADING":
			return { ...state, isLoading: action.payload };

		case "SET_BLOCK_BUTTON":
			return { ...state, blockButton: payload };

		case "SET_NEW_TASK_TITLE":
			return { ...state, newTaskTitle: payload };
		case "SET_SEARCH_PHRASE":
			return { ...state, searchPhrase: action.payload };
		case "TOGGLE_SORT_ALPHABETICALLY":
			return {
				...state,
				sortAlphabetically: !state.sortAlphabetically,
			};

		default:
			return state;
	}
};
