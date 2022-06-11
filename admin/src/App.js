import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Cars from './pages/Cars';
import CarsAdd from './pages/CarsAdd';
import Homepage from './pages/Homepage';

export default function App() {
	return (
		<Router>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/cars" element={<Cars />} />
					<Route path="/cars/add" element={<CarsAdd />} />
				</Routes>
			</MainLayout>
		</Router>
	);
}
