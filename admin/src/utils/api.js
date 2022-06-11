const API_LOCAL = 'http://localhost:9500';
const API_PROD = 'https://merazmi-carent.herokuapp.com';

const API_SELECTED = API_PROD;

export const API = {
	CARS: {
		READALL: API_SELECTED + '/api/cars',
		READONE: API_SELECTED + '/api/cars/',
		CREATE: API_SELECTED + '/api/cars',
		UPDATE: API_SELECTED + '/api/cars/',
		DELETE: API_SELECTED + '/api/cars/',
	},
	FILE: {
		GETURL: API_SELECTED + '/api/upload',
	},
};
