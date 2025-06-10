import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/")
			.then((response) => response.json())
			.then((loadTask) => {
				setTasks(loadTask);
				setIsLoading(false);
			})
			.catch((error) => console.error("Ошибка получения данных", error));
	}, []);

	
	return (
		<>
			<h1>Список дела на React</h1>
			{isLoading ? (
				<div>Загрузка...</div>
			) : (
				<div className="todo">
					{tasks.map(({ id, title }) => (
						<div className="todo__item" key={id}>
							<span>#{id}</span>
							{title}
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default App;
