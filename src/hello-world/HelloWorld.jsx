import './HelloWorld.css';
// Sebelumnya kita membuat satu file JSX untuk satu Component
// Walaupun itu adalah praktek yang baik, tapi bukan berarti itu wajib dilakukan
// Component sebenarnya hanyalah sebuah function yang mengembalikan React Element,
// oleh karena itu jika kita ingin membuat Component,
// kita hanya cukup membuat function yang mengembalikan React Element

export default function HelloWorld() {
	const props = {
		text: 'hello props spread syntax',
	};

	return (
		<div>
			<HeaderHelloWorld {...props} />
			<ParagraphHelloWorld />
		</div>
	);
}

function HeaderHelloWorld({ text = 'text empty' }) {
	return <h1 className='title'>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
	const text = 'Hello React';
	return <p className='content'>{text.toLowerCase()}</p>;
}
