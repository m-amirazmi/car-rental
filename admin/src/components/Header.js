export default function Header() {
	return (
		<div className="bg-white sticky-top">
			<div className="container-fluid px-5 py-2 d-flex justify-content-between align-items-center">
				<div>
					<img src="/images/logo.png" alt="Logo" width={143} height={50} />
				</div>
				<div className="cursor-pointer d-flex gap-3 align-items-center">
					<p className="mb-0">Welcome, Muhamad Amir Azmi</p>
					<i className="bi bi-person-circle header-icon"></i>
				</div>
			</div>
		</div>
	);
}
