import React, { useState } from "react"
import "./Navbar.css"
import logo from "../assets/logo.svg"

export default function Navbar({ langState, enLangHandler, plLangHandler }) {
	return (
		<>
			<div className="navbar">
				<img
					src={logo}
					alt="Logo"
					className="logo"
				/>
				<div className="langSwitch">
					<div
						className={
							langState === "en"
								? "visLangSwitch active-lang"
								: "visLangSwitch"
						}
						onClick={enLangHandler}
					>
						EN
					</div>
					<div
						className={
							langState === "pl"
								? "hidLangSwitch active-lang"
								: "hidLangSwitch"
						}
						onClick={plLangHandler}
					>
						PL
					</div>
				</div>
			</div>
			<div className="pink-box"></div>
			<div className="blue-box"></div>
		</>
	)
}
