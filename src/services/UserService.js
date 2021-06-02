import axios from 'axios';
import AuthService from './AuthService';
import Auth from '../Auth';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    readUsersMe: async function(){
        const apiUrl = baseUrl+'/users/me'
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

    getUserById: async function(id){
        const apiUrl = baseUrl+'/users/'+id
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
            const partnerUrl = baseUrl+'/partners/'+response.data.partner_id
            const partners = await axios({
                url: partnerUrl,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: token.user_key,
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