import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ time }) => {
	const [counter, setCounter] = useState(0);
	if (counter === 10) {
		setCounter(0);
	}
	useEffect(() => {
		const id = setInterval(() => {
			setCounter(counter => counter + 1);
		}, time);
	}, []);
	return <p className="card-text">{counter}</p>;
};
Counter.propTypes = {
	time: PropTypes.number
};

export default Counter;
