import { useDispatch, useSelector } from "react-redux";

export default function Controls() {
	const dispatch = useDispatch();
	const { searchPhrase, sortAlphabetically } = useSelector(
		(state) => state.uiState
	);

	return (
		<div className="controls">
			<div className="search-task">
				<input
					type="text"
					value={searchPhrase}
					onChange={(e) =>
						dispatch({
							type: "SET_SEARCH_PHRASE",
							payload: e.target.value,
						})
					}
					placeholder="Поиск задач..."
				/>
			</div>
			<button
				className={`sort-btn ${sortAlphabetically ? "active" : ""}`}
				onClick={() => dispatch({ type: "TOGGLE_SORT_ALPHABETICALLY" })}
			>
				{sortAlphabetically
					? "Отменить сортировку"
					: "Сортировать по алфавиту"}
			</button>
		</div>
	);
}
