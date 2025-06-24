export const requestTask = () => {
	return (dispatch, getState) => {
		const state = getState();
		const { newTaskTitle } = state.uiState;

		if (!newTaskTitle.trim()) return;
		dispatch({ type: "SET_BLOCK_BUTTON", payload: true });

		fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: { "Content-type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				title: newTaskTitle,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newTask) => {
				dispatch({ type: "TASK_ADDED", payload: newTask });
				dispatch({ type: "SET_NEW_TASK_TITLE", payload: "" });
				dispatch({ type: "TASK_LOADED" });
			})
			.finally(() =>
				dispatch({ type: "SET_BLOCK_BUTTON", payload: false })
			);
	};
};

export const deleteTask = (id) => {
	return (dispatch) => {
		dispatch({ type: "SET_BLOCK_BUTTON", payload: true });

		fetch(`http://localhost:3000/todos/${id}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				dispatch({ type: "TASK_DELETED", payload: { id } });
			})
			.finally(() =>
				dispatch({ type: "SET_BLOCK_BUTTON", payload: false })
			);
	};
};
export const reworkBtn = (id) => {
	return (dispatch) => {
		dispatch({ type: "SET_BLOCK_BUTTON", payload: false });

		fetch(`http://localhost:3000/todos/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				title: "fdsdf",
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTask) => {
				dispatch({ type: "TASK_UPDATED", payload: updatedTask });
				dispatch({ type: "TASK_LOADED" });
			})
			.finally(() =>
				dispatch({ type: "SET_BLOCK_BUTTON", payload: false })
			);
	};
};
