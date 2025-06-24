import TaskBtns from "./TaskBtns";
export default function TaskItem({ id, title, blockButton, onDelete, onEdit }) {
	return (
		<>
			<div className="todo__item" key={id}>
				<span>#{id}</span>
				<div id={id}>{title}</div>
				<TaskBtns
					blockButton={blockButton}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			</div>
		</>
	);
}
