import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './pages/HomePage';
import { ReservationPage } from './components/ReservationPage';
import './global.css';

// const App = () => {
// 	return (
// 		<div className="container">
// 			<h1>Leviexpress</h1>
// 			<nav>
// 				<Link to="/home">HomePage</Link>
// 				<span> | </span>
// 				<Link to="/reservation">Reservation</Link>
// 				<span> | </span>
// 			</nav>
// 			<Outlet />
// 		</div>
// 	);
// };

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,

		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'reservation',
				element: <ReservationPage />,
			},
		],
	},
]);

createRoot(document.querySelector('#app')).render(
	<RouterProvider router={router} />
);
