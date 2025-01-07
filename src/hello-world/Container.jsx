export default function Container({ children }) {
	return (
		<div>
			<h1>Container header</h1>
			{children}
			<footer>
				<p>container footer</p>
			</footer>
		</div>
	);
}
