import axios from 'axios';
import AuthService from './AuthService';
import Auth from '../Auth';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    getTransactions: async function(currentPage, perPage, query){
        const order = (query['asc']) ? 'asc' : 'desc';
        const sort = (query['column']) ? query['column'] : 'id';
        const apiUrl = baseUrl+'/transactions/?page='+currentPage+'&limit='+perPage+'&order='+order+'&sort='+sort
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
    },

    getTransactionById: async function(id){
        const apiUrl = baseUrl+'/transactions/'+id
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
            return response.data.transaction
        } catch (error) {
            throw(error);
        }
    }

}