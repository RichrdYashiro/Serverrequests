export const loadTasks = () => (dispatch) => {
	dispatch({ type: "SET_LOADING", payload: true });

	fetch("http://localhost:3000/todos")
		.then((res) => res.json())
		.then((tasks) => {
			dispatch({ type: "TASK_LOADED", payload: tasks });
		})
		.catch((err) => {
			console.error("Ошибка загрузки задач:", err);
		})
		.finally(() => {
			dispatch({ type: "SET_LOADING", payload: false });
		});
};
