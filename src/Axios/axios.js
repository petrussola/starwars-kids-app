import axios from 'axios';

export const axiosWithBase = () => {
	return axios.create({
		baseURL: process.env.REACT_APP_BASE_URL,
		headers: {
			'Ocp-Apim-Subscription-Key': process.env.REACT_APP_SUBSCRIPTION_KEY,
		},
	});
};

export const baseURL = process.env.REACT_APP_BASE_URL;
