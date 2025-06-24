import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "./actionAsnc/taskAnctions";
import { requestTask, deleteTask, reworkBtn } from "./actionAsnc/taskThunks";
import Controls from "./componetns/controls";
import TaskAdd from "./componetns/TaskAdd";
import TaskItem from "./componetns/TaskItem";

import "./App.css";

function App() {
	const dispatch = useDispatch();

	const { searchPhrase, sortAlphabetically } = useSelector(
		(state) => state.uiState
	);
	const [filteredTasks, setFilteredTasks] = useState([]);
	const tasks = useSelector((state) => state.taskState);
	const ui = useSelector((state) => state.uiState);

	const { newTaskTitle, isLoading, blockButton } = ui;

	useEffect(() => {
		dispatch(loadTasks());
	}, [dispatch]);

	useEffect(() => {
		let result = [...tasks];

		if (searchPhrase.trim() !== "") {
			result = result.filter((task) =>
				task.title.toLowerCase().includes(searchPhrase.toLowerCase())
			);
		}

		if (sortAlphabetically) {
			result.sort((a, b) => a.title.localeCompare(b.title));
		}

		setFilteredTasks(result);
	}, [searchPhrase, tasks, sortAlphabetically]);

	return (
		<>
			<h1>Список дела на React</h1>
			<Controls />

			<TaskAdd
				onChange={(e) =>
					dispatch({
						type: "SET_NEW_TASK_TITLE",
						payload: e.target.value,
					})
				}
				value={newTaskTitle}
				onClick={() => dispatch(requestTask())}
				blockButton={blockButton}
			/>
			{isLoading ? (
				<div>Загрузка...</div>
			) : (
				<div className="todo">
					{filteredTasks.length === 0 ? (
						<div>Ничего не найдено</div>
					) : (
						filteredTasks.map(({ id, title }) => (
							<TaskItem
								key={id}
								id={id}
								title={title}
								blockButton={blockButton}
								onEdit={() => dispatch(reworkBtn(id))}
								onDelete={() => dispatch(deleteTask(id))}
							/>
						))
					)}
				</div>
			)}
		</>
	);
}

export default App;
