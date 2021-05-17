import axios from 'axios';
import AuthService from './AuthService';
import Auth from '../Auth';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    getTransactions: async function(){
        const apiUrl = baseUrl+'/transactions'
        const token = await AuthService.getToken()
        try {
            const response = await axios({
                url: apiUrl,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: token.user_key,
                }
            });
            return response.data
        } catch (error) {
            throw(error);
        }
    }

}