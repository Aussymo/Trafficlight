import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("off");
	let red = "bg-danger rounded-cicle";
	let yellow = "bg-warning rounded-cicle";
	let green = "bg-sucess rounded-cicle";
	let off = "bg-dark rounded-cicle";

	return (
		<div claName="cable">
			<div className="lightcable"></div>
			<div className="box">
				<div className="light" onClick={() => setColor("red")}>
					{color == "yellow" || color == "green" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glow ${red}`}></div>
					)}
				</div>
				<div className="light" onClick={() => setColor("yellow")}>
					{color == "red" || color == "green" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glower ${yellow}`}></div>
					)}
				</div>
				<div className="light" onClick={() => setColor("green")}>
					{color == "yellow" || color == "red" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glowerest ${green}`}></div>
					)}
				</div>
				<div className="light"  onClick={() => setColor("green")}>
					{color == "yellow" || color == "red" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glowerests ${green}`}></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
