import axios from "axios"

const BACKEND_URL =
	"https://itc-app-4f0de-default-rtdb.europe-west1.firebasedatabase.app"

export async function sendFormData(formData) {
	const response = await axios.post(BACKEND_URL + "/formdata.json", formData)
	return response
}

export async function getFormData() {
	const response = await axios.get(BACKEND_URL + "/formdata.json")
	let resData = []
	for (const key in response.data) {
		const mojObject = {
			id: key,
			name: response.data[key].name,
			passw: response.data[key].passw,
			firstName: response.data[key].firstName,
			lastName: response.data[key].lastName,
			email: response.data[key].email,
			body: response.data[key].body,
			lat: response.data[key].lat,
			lng: response.data[key].lng,
			rodoCheck: response.data[key].rodoCheck,
			rodoTele: response.data[key].rodoTele,
		}
		resData.push(mojObject)
	}
	return resData
}
