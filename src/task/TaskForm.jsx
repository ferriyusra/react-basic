import { useState } from 'react';

export default function TaskForm({ setItems }) {
	const [item, setItem] = useState('');

	function handleChange(e) {
		setItem(e.target.value);
	}

	function handleClick(e) {
		e.preventDefault();
		setItems((draft) => {
			draft.push(item);
		});
		setItem('');
	}

	return (
		<div>
			<h1>create task</h1>
			<form>
				<input type='text' value={item} onChange={handleChange} />
			</form>
			<button onClick={handleClick}>add</button>
		</div>
	);
}
