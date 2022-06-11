import { TRANSMISSIONS } from '../../utils/configs';

export default function InputDetails({ setInput, input, years, carList, handleImageInput }) {
	console.log(input.brand);

	return (
		<div>
			<h5>Car Details</h5>
			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="brand" className="form-label">
						Brand
					</label>
					<select id="brand" className="form-select" onChange={({ target }) => setInput({ ...input, brand: target.value })} value={input.brand || ''}>
						<option value="" disabled>
							-- Select ONE Brand --
						</option>
						{carList.map((c) => (
							<option key={c.brand} value={c.brand}>
								{c.brand}
							</option>
						))}
					</select>
				</div>

				<div className="col-md-6">
					<label htmlFor="model" className="form-label">
						Model
					</label>
					<select disabled={!input.brand} id="model" className="form-select" onChange={({ target }) => setInput({ ...input, model: target.value })} value={input.brand || ''}>
						<option value="" disabled>
							-- Select ONE Model --
						</option>
						{carList
							.find((c) => c.brand === input.brand)
							?.models?.map((c2) => (
								<option key={c2} value={c2}>
									{c2}
								</option>
							))}
					</select>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="year" className="form-label">
						Year
					</label>
					<select id="year" className="form-select" onChange={({ target }) => setInput({ ...input, year: target.value })} value={input.year || ''}>
						<option value="" disabled>
							-- Select Make Year --
						</option>
						{years
							.sort((a, b) => b - a)
							.map((y) => (
								<option key={y} value={y}>
									{y}
								</option>
							))}
					</select>
				</div>

				<div className="col-md-6">
					<label htmlFor="transmission" className="form-label">
						Transmission
					</label>
					<select id="transmission" className="form-select text-capitalize" onChange={({ target }) => setInput({ ...input, transmission: target.value })} value={input.transmission || ''}>
						<option value="" disabled>
							-- Select Transmission --
						</option>
						{TRANSMISSIONS.map((t, key) => (
							<option key={key} value={key}>
								{t}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="year" className="form-label">
						Mileage
					</label>
					<input type="number" className="form-control" id="year" placeholder="eg: 10000" value={input.mileage} onChange={({ target }) => setInput({ ...input, mileage: target.value })} />
				</div>
				<div className="col-md-6">
					<label htmlFor="color" className="form-label">
						Color
					</label>
					<input type="text" className="form-control" id="color" placeholder="eg: Red" value={input.color} onChange={({ target }) => setInput({ ...input, color: target.value })} />
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="cc" className="form-label">
						CC
					</label>
					<input type="number" step="0.1" className="form-control" id="cc" placeholder="eg: 10000" value={input.cc} onChange={({ target }) => setInput({ ...input, cc: target.value })} />
				</div>
				<div className="col-md-6">
					<label htmlFor="variant" className="form-label">
						Variant
					</label>
					<input
						type="text"
						className="form-control"
						id="variant"
						placeholder="eg: Standard"
						value={input.variant}
						onChange={({ target }) => setInput({ ...input, variant: target.value })}
					/>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<div>
						<label htmlFor="cc" className="form-label">
							Images (max: 5 images)
						</label>
						<input className="form-control" type="file" multiple accept="image/*" onChange={handleImageInput} />
					</div>
					{input.images_preview?.length > 0 && typeof input.images[0] !== 'string' && (
						<div className="d-flex gap-2 mt-3">
							{input.images_preview.map((img, key) => (
								<div key={key} className="border border-2" style={{ width: '20%' }}>
									<img className="w-100" src={img} alt={`Preview Image ${key + 1}`} />
								</div>
							))}
						</div>
					)}
					{input.images?.length > 0 && (
						<div className="d-flex gap-2 mt-3">
							{input.images.map((img, key) => {
								if (typeof img !== 'string') return;
								return (
									<div key={key} className="border border-2" style={{ width: '20%' }}>
										<img className="w-100" src={img} alt={`Preview Image ${key + 1}`} />
									</div>
								);
							})}
						</div>
					)}
				</div>
				<div className="col-md-6">
					<label htmlFor="variant" className="form-label">
						Description
					</label>
					<textarea
						className="form-control"
						placeholder="Write a description for the car..."
						style={{ height: '120px' }}
						value={input.description}
						onChange={({ target }) => setInput({ ...input, description: target.value })}
					></textarea>
				</div>
			</div>
		</div>
	);
}
