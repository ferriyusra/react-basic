import Todo from './Todo';
export default function Todolist() {
	const data = [
		{
			id: 0,
			text: 'Belajar React',
			isCompleted: true,
		},
		{
			id: 1,
			text: 'Belajar JS',
			isCompleted: true,
		},
		{
			id: 2,
			text: 'Belajar TS',
			isCompleted: false,
		},
	];

	return (
		<ul>
			{data.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</ul>
	);
}
