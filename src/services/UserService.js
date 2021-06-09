import axios from 'axios';
import { getUser } from '../utils/Common';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    readUsersMe: async function(){
        const apiUrl = baseUrl+'/users/me'
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

    getUserById: async function(id){
        const apiUrl = baseUrl+'/users/'+id
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
            const partnerUrl = baseUrl+'/partners/'+response.data.partner_id
            const partners = await axios({
                url: partnerUrl,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: token,
                }
            });
            const json = [];
            json['user'] = response.data;
            json['partner'] = partners.data;
            return json
        } catch (error) {
            throw(error);
        }
    }

}