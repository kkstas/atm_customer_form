import React from "react"
import "./Modal.css"

export default function Modal({ hideModal, isModalVisible, content }) {
	return (
		<div
			className={
				isModalVisible ? "modal-container cont-vis" : "modal-container"
			}
		>
			<div className="modal-box">
				<div
					className="modal-close-btn"
					onClick={() => hideModal()}
				></div>
				<div className="modal-content">
					<h1>Udało się!</h1>
				</div>
			</div>
		</div>
	)
}
