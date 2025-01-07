import { useState } from 'react';

export default function Counter({ name }) {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>counter {name}</h1>
			<p>counter {count}</p>
			<button onClick={handleClick}>increment</button>
		</div>
	);
}
