export default function GuestBookForm({ ref, name, setName }) {
	return (
		<>
			<label htmlFor='name'>Name : </label>
			<input
				ref={ref}
				placeholder='name'
				type='text'
				name='name'
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<br />
		</>
	);
}
