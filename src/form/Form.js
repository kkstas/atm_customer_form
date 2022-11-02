import React from "react"
import Map from "../map/Map"
import Modal from "../modal/Modal"
import { sendFormData } from "../util/http"
import "./Form.css"

export default function Form({ lang }) {
	const [isRodoShown, setIsRodoShown] = React.useState(false)
	const [isRodoTeleShown, setIsRodoTeleShown] = React.useState(false)

	const [isModalVisible, setIsModalVisible] = React.useState(false)
	const [modalContent, setModalContent] = React.useState("")

	function showModal() {
		setIsModalVisible(true)
	}
	function hideModal() {
		setIsModalVisible(false)
		setIsRodoShown(false)
		setIsRodoTeleShown(false)
		setModalContent("")
	}

	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		body: "",
		lat: "",
		lng: "",
		rodoCheck: false,
		rodoTele: false,
	})

	function hideRodo(event) {
		event.preventDefault()
		setIsRodoShown(false)
	}
	function showRodo(event) {
		event.preventDefault()
		setIsRodoShown(true)
	}
	function hideRodoTele(event) {
		event.preventDefault()
		setIsRodoTeleShown(false)
	}
	function showRodoTele(event) {
		event.preventDefault()
		setIsRodoTeleShown(true)
	}

	function handleChange(event) {
		const { name, value, type, checked } = event.target
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
			}
		})
	}

	function setLatLng(lat, lng) {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				lat: lat,
				lng: lng,
			}
		})
	}

	async function handleSubmit(event) {
		event.preventDefault()
		// submitToApi(formData)
		const response = await sendFormData(formData)
		console.log(response)
		setModalContent({ ...response, ...formData })
		showModal()
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			body: "",
			lat: "",
			lng: "",
			rodoCheck: false,
			rodoTele: false,
		})
	}

	return (
		<>
			<Modal
				hideModal={hideModal}
				content={modalContent}
				isModalVisible={isModalVisible}
			/>
			<div className="form-container">
				<form
					onSubmit={handleSubmit}
					className="form"
				>
					<input
						className="first-input"
						type="text"
						placeholder={lang.name}
						onChange={handleChange}
						name="firstName"
						value={formData.firstName}
					/>
					<input
						className="second-input"
						type="text"
						placeholder={lang.surname}
						onChange={handleChange}
						name="lastName"
						value={formData.lastName}
					/>
					<input
						className="third-input"
						type="email"
						placeholder={lang.email}
						onChange={handleChange}
						name="email"
						value={formData.email}
					/>
					<textarea
						value={formData.body}
						placeholder={lang.ticketDescription}
						onChange={handleChange}
						name="body"
						className="textarea-input"
						rows="5"
					/>

					<Map
						lang={lang}
						setLatLng={setLatLng}
					/>
					<span className="check-form">
						<input
							type="checkbox"
							id="rodoCheck"
							checked={formData.isFriendly}
							onChange={handleChange}
							name="rodoCheck"
						/>
						<label
							htmlFor="rodoCheck"
							className="rodo-text"
						>
							{lang.rodo}
							{isRodoShown ? (
								<>
									{lang.rodoCont}{" "}
									<span
										className="rodo-underline-less"
										onClick={hideRodo}
									>
										{lang.less}
									</span>
									<br />
									<br />
								</>
							) : (
								<>
									<span className="rodo-text">... </span>
									<span
										className="rodo-underline-more"
										onClick={showRodo}
									>
										{lang.more}
									</span>
								</>
							)}
						</label>
					</span>
					<span className="check-form">
						<input
							type="checkbox"
							id="rodoTele"
							checked={formData.rodoTele}
							onChange={handleChange}
							name="rodoTele"
						/>
						<label
							htmlFor="rodoTele"
							className="rodo-text"
						>
							{isRodoTeleShown && <br />}
							{lang.rodoTele}
							{isRodoTeleShown ? (
								<>
									{lang.rodoTeleCont}{" "}
									<span
										className="rodo-underline-less"
										onClick={hideRodoTele}
									>
										{lang.less}
									</span>
								</>
							) : (
								<>
									<span className="rodo-text">... </span>
									<span
										className="rodo-underline-more"
										onClick={showRodoTele}
									>
										{lang.more}
									</span>
								</>
							)}
						</label>
					</span>
					<br />
					<br />
					<button className="submit-btn">{lang.send}</button>
				</form>
			</div>
			<button onClick={showModal}>roboczy przycisk modal on</button>
		</>
	)
}
