export default function Toolbar({ onClick }) {
	return (
		<div onClick={onClick} style={{ backgroundColor: 'aqua' }}>
			<button onClick={onClick}>first</button>
			<button onClick={onClick}>second</button>
		</div>
	);
}
