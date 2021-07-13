import PropTypes from "prop-types";
import React from "react";

const card = ({ counter }) => {
	return (
		<div
			className="card text-white bg-dark mb-3"
			style={{ maxWidth: "18rem" }}>
			<div className="card-body">
				<p className="card-text">{counter}</p>
			</div>
		</div>
	);
};

card.propTypes = {
	counter: PropTypes.number
};

export default card;
