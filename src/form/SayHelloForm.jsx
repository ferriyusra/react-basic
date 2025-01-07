export default function SayHelloForm() {
	function handleClick(e) {
		e.preventDefault();
		const name = document.getElementById('input_name').value;
		return (document.getElementById('text_hello').innerText = `hello ${name}`);
	}

	return (
		<div>
			<form action=''>
				<input id='input_name' />
				<button onClick={handleClick}>say hello</button>
			</form>
			<h1 id='text_hello'>hello world</h1>
		</div>
	);
}
