import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GuestBook from './GusetBook';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GuestBook />
	</StrictMode>
);
