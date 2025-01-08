import { useRef, useState } from 'react';

export default function Timer() {
	const [start, setStart] = useState(null);
	const [now, setNow] = useState(null);
	const timer = useRef(null);

	function handleStart() {
		setStart(Date.now());
		setNow(Date.now());

		timer.current = setInterval(() => {
			setNow(Date.now());
		}, 10);
	}

	function handleStop() {
		clearInterval(timer.current);
	}

	return (
		<div>
			<h1>Timer : {now - start} ms</h1>
			<button onClick={handleStart}>Start</button>
			<br />
			<button onClick={handleStop}>Stop</button>
		</div>
	);
}