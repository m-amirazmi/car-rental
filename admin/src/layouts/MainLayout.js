import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function MainLayout({ children }) {
	return (
		<>
			<Header />
			<div className="row container-fluid m-0 p-0">
				<Sidebar />
				<div className="col-lg-10 p-0">
					<div className="layout__content bg-light d-flex flex-column justify-content-between">
						{children}
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
