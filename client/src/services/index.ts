import axios, { AxiosStatic } from "axios";

class HTTPMethod {
	axios: AxiosStatic;

	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = "http://localhost:3000";
	}

	get = (url: string, remainProps?: any): any => axios.get(url, remainProps);

	post = (url: string, remainProps?: any): any => axios.post(url, remainProps);

	put = (url: string, remainProps?: any): any => axios.put(url, remainProps);

	delete = (url: string, remainProps?: any): any =>
		axios.delete(url, remainProps);
}

export default new HTTPMethod();
