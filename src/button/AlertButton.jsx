import { useRef } from 'react';

export default function AlertButton({ text, message }) {
	const counter = useRef(0);

	// without ref
	// function handleClick(e) {
	// 	console.info(e.target);
	// 	alert(message);
	// }

	// with ref
	function handleClick(e) {
		console.info(e.target);
		alert(`${message} - ${counter.current++}`);
	}

	// without ref
	// return <button onClick={handleClick}>{text}</button>;

	// with ref
	return <button onClick={handleClick}>{text}</button>;
}
