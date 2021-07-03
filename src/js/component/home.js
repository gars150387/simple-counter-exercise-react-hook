import React, { useEffect, useState } from "react";
import Card from "./card";

export function Home() {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [counter5, setCounter5] = useState(0);

	if (counter === 10) {
		setCounter(0);
	}
	if (counter2 === 10) {
		setCounter2(0);
	}
	if (counter3 === 100) {
		setCounter3(0);
	}
	if (counter4 === 1000) {
		setCounter4(0);
	}
	if (counter5 === 10000) {
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
		}, 100000000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter5(counter5 => counter5 + 1);
		}, 10000000000);
	}, []);
	return (
		<div className="row justify-content-center mt-5 border-rounded">
			<div className="col-4 align-self-center d-flex bg-dark">
				<i
					className="far fa-clock fa-2x d-flex mt-3"
					style={{ maxWidth: "18rem", color: "white" }}></i>
				<Card number={counter5} />
				<Card number={counter4} />
				<Card number={counter3} />
				<Card number={counter2} />
				<Card number={counter} />
			</div>
		</div>
	);
}
