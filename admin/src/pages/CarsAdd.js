import { useEffect, useState } from 'react';
import InputDetails from '../components/CarsAdd/InputDetails';
import InputLocation from '../components/CarsAdd/InputLocation';
import PageTitle from '../components/PageTitle';
import allCarJson from '../data/cars.json';

export default function CarsAdd() {
	const [carList, setCarList] = useState([]);
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

	console.log(input);

	return (
		<div className="p-5">
			<PageTitle title="Add A New Car" subtitle="Add your new car here." />

			<div className="mt-3 bg-white p-4 rounded-3">
				<form>
					<InputDetails input={input} setInput={setInput} carList={carList} years={years} handleImageInput={handleImageInput} />
					<div className="border-top my-4"></div>
					<InputLocation input={input} setInput={setInput} />
				</form>
			</div>
		</div>
	);
}
