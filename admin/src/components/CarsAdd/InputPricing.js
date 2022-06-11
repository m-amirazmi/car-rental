import { AVAILABILITY } from '../../utils/configs';

export default function InputPricing({ input, setInput }) {
	return (
		<div>
			<h5>Car Pricing &amp; Availability</h5>
			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="rate" className="form-label">
						Rate Per Hour (RM)
					</label>
					<input type="number" className="form-control" id="rate" placeholder="eg: 100" value={input.rate} onChange={({ target }) => setInput({ ...input, rate: target.value })} />
				</div>
				<div className="col-md-6">
					<label htmlFor="availability" className="form-label">
						Availability
					</label>
					<select id="availability" className="form-select" value={input.availability} onChange={({ target }) => setInput({ ...input, availability: target.value })} defaultValue="">
						<option value="" disabled>
							-- Select Car Availability --
						</option>
						{AVAILABILITY.map((y, key) => (
							<option key={key} value={key}>
								{y}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}
