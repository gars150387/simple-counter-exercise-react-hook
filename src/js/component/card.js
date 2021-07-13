import PropTypes from "prop-types";
import React from "react";

const card = prop => {
	return (
		<div
			className="card text-white bg-dark mb-3"
			style={{ maxWidth: "18rem" }}>
			<div className="card-body">
				<p className="card-text">{prop.number}</p>
			</div>
		</div>
	);
};

export default card;
