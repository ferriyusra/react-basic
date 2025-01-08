import { useRef, useState } from 'react';
import GuestBookForm from './GuestBookForm';

export default function GuestBook() {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const nameInput = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		setName('');
		setMessage('');

		nameInput.current.focus();

		alert(`Name : ${name} | Message : ${message}`);
	}

	return (
		<div>
			<h1>Guest Book</h1>
			<form>
				{/* <label htmlFor={nameInput}>Name : </label>
				<input
					placeholder='name'
					type='text'
					ref={nameInput}
					name='name'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br /> */}
				<GuestBookForm ref={nameInput} name={name} setName={setName} />
				<br />
				<label htmlFor='message'>Message : </label>
				<textarea
					name='message'
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}></textarea>
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}
