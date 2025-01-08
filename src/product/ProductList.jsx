import { useEffect, useRef, useState } from 'react';
import Product from './Product';

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [load, setLoad] = useState(false);

	function handleClick() {
		setLoad(true);
	}

	useEffect(() => {
		console.log('call use effect with empty array');
	}, []);

	useEffect(() => {
		async function fetchProducts() {
			const response = await fetch('/products.json');
			const data = await response.json();
			setProducts(data);
		}

		if (load) {
			fetchProducts();
		}
	}, [load]);

	// useEffect(() => {
	// 	if (load) {
	// 		fetch('/products.json')
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				setProducts(data);
	// 			});
	// 	}
	// }, [load]);

	return (
		<>
			<h1>product list</h1>
			<button onClick={handleClick}>Load Products</button>
			{products.map((product) => (
				<Product key={product.id} products={product} />
			))}
		</>
	);
}
