import { useState } from 'react';

export default function NoteForm({ onAddNote }) {
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	function handleClick() {
		setText('');
		onAddNote(text);
	}

	return (
		<>
			<input
				type='text'
				placeholder='add note'
				value={text}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>add</button>
		</>
	);
}
