import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className="sidebar col-lg-2 p-0">
			<div className="bg-white px-3 mt-5 d-flex flex-column gap-2">
				<Link to="/" className="sidebar__link p-3 rounded-3 text-decoration-none text-dark">
					Dashboard
				</Link>
				<Link to="/cars" className="sidebar__link p-3 rounded-3 text-decoration-none text-dark">
					Cars
				</Link>
				{/* <Link to="/cars/add" className="sidebar__link p-3 rounded-3 text-decoration-none text-dark">
					Add Car
				</Link> */}
			</div>
		</div>
	);
}
