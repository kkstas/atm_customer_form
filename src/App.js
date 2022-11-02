import "./App.css"
import Footer from "./footer/Footer"
import Form from "./form/Form"
import MainText from "./mainText/MainText"
import Navbar from "./navbar/Navbar"
import { useState } from "react"
import lang from "./assets/lang"

function App() {
	const [langState, setLangState] = useState("pl")

	const enLangHandler = () => {
		setLangState("en")
	}

	const plLangHandler = () => {
		setLangState("pl")
	}

	return (
		<div className="App">
			<Navbar
				langState={langState}
				enLangHandler={enLangHandler}
				plLangHandler={plLangHandler}
			/>
			<MainText lang={lang[langState]} />

			<Form lang={lang[langState]} />
			<Footer lang={lang[langState]} />
		</div>
	)
}

export default App
