const taskInitialState = [];

export const taskReducer = (state = taskInitialState, action) => {
	switch (action.type) {
		case "TASK_ADDED":
			return [...state, action.payload];

		case "TASK_LOADED":
			return [...action.payload];
		case "TASK_DELETED":
			return state.filter((task) => task.id !== action.payload.id);

		case "TASK_UPDATED":
			return state.map((task) =>
				task.id === action.payload.id
					? { ...task, ...action.payload }
					: task
			);

		default:
			return state;
	}
};
