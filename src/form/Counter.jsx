// useState;
// Untuk membuat State, kita bisa menggunakan function useState(initial)
// https://react.dev/reference/react/useState
// Function useState akan mengembalikan array dengan dua nilai, pertama adalah State-nya, dan kedua ada function untuk mengubah value di State tersebut
// Component yang menggunakan State tersebut, secara otomatis akan di render ulang

import { useState } from 'react';

export default function Counter() {
	let [counter, setCounter] = useState(0);
	console.info('render ', counter);

	function handleClick() {
		// setCounter(counter + 3);
		setCounter((c) => c + 1); // mengubah berkali-kali terhadap state with clousure
		setCounter((c) => c + 1);
		setCounter((c) => c + 1);
		console.log(counter);
	}

	return (
		<div>
			<div>
				<button onClick={handleClick}>increment</button>
			</div>
			<h1>counter : {counter}</h1>
		</div>
	);
}
