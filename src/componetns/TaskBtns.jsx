export default function TaskBtns({ blockButton, onDelete, onEdit }) {
	return (
		<>
			<button
				className="reworkBtn"
				onClick={onEdit}
				disabled={blockButton}
			>
				R
			</button>

			<button
				className="deleteBtn"
				onClick={onDelete}
				disabled={blockButton}
			>
				X
			</button>
		</>
	);
}
