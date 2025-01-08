export default function Product({ products }) {
	return (
		<>
			<h2>
				{products.id} : {products.name}
			</h2>
			<p>harga : {products.price}</p>
		</>
	);
}
