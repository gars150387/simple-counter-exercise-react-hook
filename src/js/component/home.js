import React from "react";
import Card from "./card";
import Counter from "./counter";

export function Home() {
	const time = [100000000, 10000000, 1000000, 100000, 10000, 1000];
	return (
		<div className="row justify-content-center mt-5 border-rounded">
			<div className="col-3 justify-content-center d-flex bg-dark">
				<i
					className="far fa-clock fa-2x d-flex mt-3"
					style={{ maxWidth: "18rem", color: "white" }}></i>
				<Card number={<Counter time={time[0]} />} />
				<Card number={<Counter time={time[1]} />} />
				<Card number={<Counter time={time[2]} />} />
				<Card number={<Counter time={time[3]} />} />
				<Card number={<Counter time={time[4]} />} />
				<Card number={<Counter time={time[5]} />} />
			</div>
		</div>
	);
}
