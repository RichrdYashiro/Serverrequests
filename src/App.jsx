import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);
	const [blockButton, setBlockButton] = useState(false);
	const refreshTask = () => {
		setRefreshTasksFlag((prev) => !prev);
	};

	useEffect(() => {
		fetch("http://localhost:3000/todos")
			.then((response) => response.json())
			.then((loadTask) => {
				setTasks(loadTask);
				setIsLoading(false);
			})
			.catch((error) => console.error("Ошибка получения данных", error));
	}, [refreshTasksFlag]);

	const requestTask = () => {
		setBlockButton(true);
		fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: { "Content-type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				title: "твоя новая задача",
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				refreshTask();
			})
			.finally(() => setBlockButton(false));
	};

	const deliteTask = (id) => {
		setBlockButton(true);
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				refreshTask();
			})
			.finally(() => setBlockButton(false));
	};
	const reworkBtn = (id) => {
		setBlockButton(true);
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json;charset=utf-8" },
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				refreshTask();
			})
			.finally(() => setBlockButton(false));
	};
	return (
		<>
			<h1>Список дела на React</h1>
			<button onClick={requestTask} disabled={blockButton}>
				Добавить задачу
			</button>

			{isLoading ? (
				<div>Загрузка...</div>
			) : (
				<div className="todo">
					{tasks.map(({ id, title }) => (
						<div className="todo__item" key={id}>
							<span>#{id}</span>
							{title}
							<button
								className="reworkBtn"
								onClick={() => reworkBtn(id)}
								disabled={blockButton}
							>
								R
							</button>
							<button
								className="delineBtn"
								onClick={() => deliteTask(id)}
								disabled={blockButton || tasks.length === 0}
							>
								X
							</button>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default App;
