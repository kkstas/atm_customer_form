import React, { useState } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import "./Map.css"
import pin from "../assets/map-pin-svgrepo-com.svg"

function Map({ lang, setLatLng }) {
	const [lat, setLat] = useState(null)
	const [lng, setLng] = useState(null)

	function getLocateMe() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude)
				setLng(position.coords.longitude)
				setLatLng(position.coords.latitude, position.coords.longitude)
			})
		} else {
			console.log("geoloc is not supported")
		}
	}

	if (!lat || !lng) {
		return (
			<div className="locate-me-container">
				<div
					className="locate-me-bg"
					style={{ backgroundImage: "url(/map.png" }}
				></div>
				<div
					className="locate-btn"
					onClick={getLocateMe}
				>
					<img
						src={pin}
						alt="pin"
						className="pin"
					/>
				</div>
				<p className="locate-me-text">{lang.pressToChooseAtm}</p>
			</div>
		)
	}

	return (
		<LoadScript googleMapsApiKey="AIzaSyAnBiFrphLDO4ocvnhXvZGTyTn-f_4-_gQ">
			<GoogleMap
				mapContainerClassName="map-container"
				center={{ lat: lat, lng: lng }}
				zoom={10}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</LoadScript>
	)
}

export default React.memo(Map)
