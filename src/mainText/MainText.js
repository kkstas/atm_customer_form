import React from "react"
import atmLogo from "../assets/Bankomat-recyklujacy.svg"
import "./MainText.css"

export default function MainText({ lang }) {
	return (
		<>
			<div className="container">
				<div className="main-text-container">
					<h2 className="title">{lang.mainHeader}</h2>
					<p className="paragraph">{lang.mainBody}</p>
				</div>
				<div className="atm-logo-container">
					<img
						src={atmLogo}
						alt="atm"
					/>
				</div>
			</div>
			<div className="horizontal-main-div">
				<hr className="horizontal-main" />
				<div className="arr-down-div">
					<div className="arr-down"></div>
				</div>
			</div>
		</>
	)
}
