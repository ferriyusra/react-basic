import { useImmer } from 'use-immer';

const initialData = {
	name: '',
	message: '',
};

export default function ContactForm() {
	const [contact, setContact] = useImmer(initialData);

	function handleNameChange(e) {
		setContact((draft) => {
			draft.name = e.target.value;
		});
	}
	function handleMessageChange(e) {
		setContact((draft) => {
			draft.message = e.target.value;
		});
	}

	return (
		<div>
			<h1>contact form</h1>
			<form>
				<input
					type='text'
					placeholder='name'
					value={contact.name}
					onChange={handleNameChange}
				/>
				<input
					type='text'
					placeholder='message'
					value={contact.message}
					onChange={handleMessageChange}
				/>
			</form>
			<h1>contact detail</h1>
			<p>Name : {contact.name}</p>
			<p>Message : {contact.message}</p>
		</div>
	);
}
