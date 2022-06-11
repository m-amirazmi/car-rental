import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { API } from '../utils/api';
import { TRANSMISSIONS } from '../utils/configs';

export default function Cars() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		getCars();
	}, []);

	const getCars = async () => {
		const { data } = await axios.get(API.CARS.READALL);
		setCars(data.data);
	};

	console.log(cars);

	return (
		<div className="p-5">
			<PageTitle title="All Cars" subtitle="View, manage and update your cars here." button={{ link: '/cars/add', text: 'Add New Car' }} />

			<div className="mt-3 bg-white p-4 rounded-3">
				<table className="table table-borderless" style={{ fontSize: '14px' }}>
					<thead className="bg-light">
						<tr>
							<th scope="col"></th>
							<th scope="col">Model</th>
							<th scope="col">Brand</th>
							<th scope="col">Color</th>
							<th scope="col">CC</th>
							<th scope="col">Mileage</th>
							<th scope="col">Year</th>
							<th scope="col">Trans.</th>
							<th scope="col">Variant</th>
							<th scope="col">Date</th>
							<th scope="col">City</th>
							<th scope="col">State</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{cars.map((car) => {
							return (
								<tr key={car._id} className="border-bottom">
									<td>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
										</div>
									</td>
									<td>{car.model}</td>
									<td>{car.brand}</td>
									<td>{car.color}</td>
									<td>{car.cc}</td>
									<td>{car.mileage} km</td>
									<td>{car.year}</td>
									<td className="text-capitalize">{TRANSMISSIONS[car.transmission]}</td>
									<td>{car.variant}</td>
									<td>{new Date(car.createdAt).toLocaleDateString()}</td>
									<td>{car.location.city}</td>
									<td>{car.location.state}</td>
									<td className="d-flex gap-3">
										<Link className="text-primary" to={`/cars/${car._id}`}>
											<i className="bi bi-eye-fill"></i>
										</Link>
										<Link className="text-info" to={`/cars/${car._id}/update`}>
											<i className="bi bi-pencil-fill"></i>
										</Link>
										<i className="bi bi-trash-fill cursor-pointer text-danger"></i>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
