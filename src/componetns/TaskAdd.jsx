export default function TaskAdd({ value, onChange, onClick, blockButton }) {
	return (
		<>
			<div className="add-task">
				<input
					type="text"
					value={value}
					onChange={onChange}
					placeholder="Введите новую задачу"
				/>
				<button onClick={onClick} disabled={blockButton}>
					Добавить задачу
				</button>
			</div>
		</>
	);
}
