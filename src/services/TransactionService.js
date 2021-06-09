import axios from 'axios';
import { getUser } from '../utils/Common';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    getTransactions: async function(currentPage, perPage, query){
        const order = (query['asc']) ? 'asc' : 'desc';
        const sort = (query['column']) ? query['column'] : 'id';
        const apiUrl = baseUrl+'/transactions/?page='+currentPage+'&limit='+perPage+'&order='+order+'&sort='+sort
        const token = getUser()
        try {
            const response = await axios({
                url: apiUrl,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: token,
                }
            });
            return response.data
        } catch (error) {
            throw(error);
        }
    },

    getTransactionById: async function(id){
        const apiUrl = baseUrl+'/transactions/'+id
        const token = getUser()
        try {
            const response = await axios({
                url: apiUrl,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: token,
                }
            });
            return response.data.transaction
        } catch (error) {
            throw(error);
        }
    }

}