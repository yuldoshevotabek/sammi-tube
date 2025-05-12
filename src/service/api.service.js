import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	params: {
		maxResults: '50',
	},
	headers: {
		'x-rapidapi-key': 'aabf9ae9f6mshf84c2669d7ec035p171a7fjsn24e9ca60394a',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiServis = {
	async fetching(url) {
		const respons = await axios.get(`${BASE_URI}/${url}`, options)
		return respons.data
	},
}
