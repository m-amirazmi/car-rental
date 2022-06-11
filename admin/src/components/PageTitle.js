import { Link } from 'react-router-dom';

export default function PageTitle({ button, title, subtitle }) {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<div>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
			{button && (
				<div>
					<Link to={button.link} className="btn btn-primary">
						{button.text}
					</Link>
				</div>
			)}
		</div>
	);
}
