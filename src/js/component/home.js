import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
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
	if (counter3 === 24) {
		setCounter3(0);
	}
	if (counter4 === 30) {
		setCounter4(0);
	}
	if (counter5 === 12) {
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
		}, 60000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter4(counter4 => counter4 + 1);
		}, 1000000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter5(counter5 => counter5 + 1);
		}, 10000000);
	}, []);
	return (
		<div className="text-center text-white mt-5">
			<div className="col-md-6 ms-md-auto bg-dark m-auto rounded">
				<p>
					{counter5}+`&ldquo;`+{counter4}+`&ldquo;`+{counter3}
					+`&ldquo;`+{counter2}+`&ldquo;`+{counter}
				</p>
			</div>
		</div>
	);
}
