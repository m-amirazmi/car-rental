import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../utils/api';
import InputDetails from '../components/CarsAdd/InputDetails';
import InputLocation from '../components/CarsAdd/InputLocation';
import InputPricing from '../components/CarsAdd/InputPricing';
import PageTitle from '../components/PageTitle';
import allCarJson from '../data/cars.json';
import allStatesCities from '../data/states_cities.json';

export default function CarsAdd() {
	const [carList, setCarList] = useState([]);
	const [statesCities, setStatesCities] = useState([]);
	const [years, setYears] = useState([]);
	const [input, setInput] = useState({});

	useEffect(() => {
		const newCarList = [];
		for (const car in allCarJson.list) {
			const carObj = {
				brand: car,
				models: allCarJson.list[car],
			};
			newCarList.push(carObj);
		}
		setCarList(newCarList);
	}, []);

	useEffect(() => {
		const currentYear = new Date().getFullYear();
		const range = 20;
		const yearsArray = [];
		for (let i = range; i !== 0; i--) {
			yearsArray.push(currentYear - i);
		}
		yearsArray.push(currentYear);
		setYears(yearsArray);
	}, []);

	useEffect(() => {
		const newStatesCities = [];
		for (const state in allStatesCities) {
			const stateObj = {
				state: state,
				cities: allStatesCities[state],
			};
			newStatesCities.push(stateObj);
		}
		setStatesCities(newStatesCities);
	}, []);

	const handleImageInput = ({ target }) => {
		const limit = 5;
		const files = Array.from(target.files);

		if (files.length > limit) {
			alert(`Only ${limit} files are allowed to upload.`);
			target.value = '';
		} else {
			const previewImages = [];
			files.forEach((file) => {
				const fileURL = URL.createObjectURL(file);
				previewImages.push(fileURL);
			});
			setInput({ ...input, images_preview: previewImages, images: files });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const copyInput = { ...input, location: { ...input.location } };
		copyInput.location.type = 3;
		copyInput.location.country = 'Malaysia';

		const imagePaths = [];

		if (copyInput.images.length > 0) {
			for (let i = 0; i < copyInput.images.length; i++) {
				const { data: s3 } = await axios.get(API.FILE.GETURL);
				await axios.put(s3.url, copyInput.images[i], { headers: { 'Content-Type': 'multipart/form-data' } });
				const imagePath = s3.url.split('?')[0];
				imagePaths.push(imagePath);
			}
		}
		copyInput.images = imagePaths;
		await axios.post(API.CARS.CREATE, copyInput);

		setInput({ location: {} });
		const getImageInput = document.querySelector('input[type="file"]');
		console.log(getImageInput);
		getImageInput.value = '';
	};

	return (
		<div className="p-5">
			<PageTitle title="Add A New Car" subtitle="Add your new car here." />

			<div className="mt-3 bg-white p-4 rounded-3">
				<form onSubmit={handleSubmit}>
					<InputDetails input={input} setInput={setInput} carList={carList} years={years} handleImageInput={handleImageInput} />
					<div className="border-top my-4"></div>
					<InputLocation input={input} setInput={setInput} statesCities={statesCities} />
					<div className="border-top my-4"></div>
					<InputPricing input={input} setInput={setInput} />
					<div className="d-flex">
						<button className="mt-3 btn btn-primary px-5 ms-auto">Save Car</button>
					</div>
				</form>
			</div>
		</div>
	);
}
