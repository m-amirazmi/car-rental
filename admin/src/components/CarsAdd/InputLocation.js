export default function InputLocation({ input, setInput, statesCities }) {
	return (
		<div>
			<h5>Car Location</h5>
			<div className="row mb-3">
				<div className="col-md-12">
					<label htmlFor="address_1" className="form-label">
						Address 1
					</label>
					<input
						type="text"
						className="form-control"
						id="address_1"
						placeholder="eg: A8-4-4 Jalan Mewah ..."
						onChange={({ target }) => setInput({ ...input, location: { ...input.location, address_1: target.value } })}
					/>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-12">
					<label htmlFor="address_2" className="form-label">
						Address 2
					</label>
					<input
						type="text"
						className="form-control"
						id="address_2"
						placeholder="eg: Taman Pandan Mewah,..."
						onChange={({ target }) => setInput({ ...input, location: { ...input.location, address_2: target.value } })}
					/>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-4">
					<label htmlFor="postcode" className="form-label">
						PostCode
					</label>
					<input
						type="number"
						className="form-control"
						id="postcode"
						placeholder="eg: Taman Pandan Mewah,..."
						onChange={({ target }) => setInput({ ...input, location: { ...input.location, postcode: target.value } })}
					/>
				</div>
				<div className="col-md-4">
					<label htmlFor="city" className="form-label">
						State
					</label>
					<select id="state" className="form-select" onChange={({ target }) => setInput({ ...input, location: { ...input.location, state: target.value } })} defaultValue="">
						<option value="" disabled>
							-- Select State --
						</option>
						{statesCities.map((c) => (
							<option key={c.state} value={c.state}>
								{c.state}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-4">
					<label htmlFor="city" className="form-label">
						City
					</label>
					<select
						id="city"
						disabled={!input.location.state}
						className="form-select"
						onChange={({ target }) => setInput({ ...input, location: { ...input.location, city: target.value } })}
						defaultValue=""
					>
						<option value="" disabled>
							-- Select ONE Brand --
						</option>
						{statesCities
							.find((s) => s.state === input.location.state)
							?.cities.map((c) => (
								<option key={c} value={c}>
									{c}
								</option>
							))}
					</select>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="lat" className="form-label">
						Latitude
					</label>
					<input
						type="text"
						className="form-control"
						id="lat"
						placeholder="eg: 3.121184"
						onChange={({ target }) => setInput({ ...input, location: { ...input.location, lat: target.value } })}
					/>
				</div>
				<div className="col-md-6">
					<label htmlFor="lng" className="form-label">
						Longitude
					</label>
					<input
						type="text"
						className="form-control"
						id="lng"
						placeholder="eg: 101.7637782"
						onChange={({ target }) => setInput({ ...input, location: { ...input.location, lng: target.value } })}
					/>
				</div>
			</div>
		</div>
	);
}
