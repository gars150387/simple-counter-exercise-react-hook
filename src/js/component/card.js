import { checkPropTypes, number } from "prop-types";
import React, { useState } from "react";

const card = ({ number }) => {
	return (
		<div
			className="card text-white bg-dark mb-3"
			style={{ maxWidth: "18rem" }}>
			<div className="card-body">
				<p className="card-text">{number}</p>
			</div>
		</div>
	);
};

export default card;
