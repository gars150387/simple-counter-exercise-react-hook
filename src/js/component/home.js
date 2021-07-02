import React, { useEffect, useState } from "react";

export function Home() {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [counter5, setCounter5] = useState(0);

	if (counter === 10) {
		setCounter(0);
	}
	if (counter2 === 6) {
		setCounter2(0);
	}
	if (counter3 === 60) {
		setCounter3(0);
	}
	if (counter4 === 24) {
		setCounter4(0);
	}
	if (counter5 === 31) {
		setCounter5(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
	}, []);

	useEffect(() => {
		setInterval(() => {
			setCounter2(counter2 => counter2 + 1);
		}, 10000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter3(counter3 => counter3 + 1);
		}, 100000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter4(counter4 => counter4 + 1);
		}, 100000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter5(counter5 => counter5 + 1);
		}, 86400000);
	}, []);
	return (
		<div className="text-center text-white mt-5 justify-content-between">
			<div className="col-md-6 ms-md-auto bg-dark m-auto rounded d-print-inline">
				<div className="row justify-content-between">
					<span className="">
						<i className="far fa-clock"></i>
					</span>
					<p>{counter5}</p>
					<p>{counter4}</p>
					<p>{counter3}</p>
					<p>{counter2}</p>
					<p>{counter}</p>
				</div>
			</div>
		</div>
	);
}
