import { useState } from 'react';
import Counter from './Counter';

export default function CounterApp() {
	const [show2, setShow2] = useState(true);

	function handleChange(event) {
		setShow2(event.target.checked);
	}

	return (
		<div>
			{show2 ? (
				<Counter key='feri' name='feri' />
			) : (
				<Counter key='yusra' name='yusra' />
			)}
			<input type='checkbox' checked={show2} onChange={handleChange} />{' '}
			tampilkan counter 2
		</div>
	);
}
