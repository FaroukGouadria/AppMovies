import {ApiUrls} from './ApiUrls';
import axios from 'axios';

// Singleton class
const AxiosService = {
    async getServiceData(url, parameter) {
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url, {
            params: parameter, headers: requestHeader,
        });
    }
}
export default AxiosService