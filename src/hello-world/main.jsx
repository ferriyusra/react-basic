// Untuk menampilkan Component, diperlukan instance dari React Root
// Kita bisa membuat React Root menggunakan method createRoot(element)
// https://react.dev/reference/react-dom/client/createRoot
// Selanjutnya untuk menampilkan Component di React Root, kita bisa gunakan method render(component)
// Untuk membantu mencari masalah saat development, React menyediakan component StrictMode, kita bisa menggunakan StrictMode untuk menampilkan komponen di Root
// https://react.dev/reference/react/StrictMode

import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';
import { StrictMode } from 'react';
import Container from './Container';
import Todolist from '../todolist/Todolist';
import Table from '../table/Table';
import AlertButton from '../button/AlertButton';
import MyButton from '../button/MyButton';
import Toolbar from '../button/Toolbar';
import SearchForm from '../form/SearchForm';
import SayHelloForm from '../form/SayHelloForm';
import Counter from '../form/Counter';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Container>
			<HelloWorld />
			<Todolist />
			<Table />

			<AlertButton text='click me' message='aww' />
			<MyButton text='smash me' onSmash={() => alert('you smash me')} />
			<Toolbar
				onClick={() => {
					// e.stopPropagation();
					alert('you click toolbar');
				}}
			/>
			<SearchForm />
			<SayHelloForm />
			<Counter />
			<Counter />
		</Container>
	</StrictMode>
);
