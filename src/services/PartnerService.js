import axios from 'axios';
import AuthService from './AuthService';
import Auth from '../Auth';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    getPartners: async function(currentPage, perPage, query){
        const order = (query['asc']) ? 'asc' : 'desc';
        const sort = (query['column']) ? query['column'] : 'id';
        const apiUrl = baseUrl+'/partners/?page='+currentPage+'&limit='+perPage+'&order='+order+'&sort='+sort
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

    getPartnerById: async function(id){
        const apiUrl = baseUrl+'/partners/'+id
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

    updatePartnerById: async function(id, partner){

        var desktop_url = partner.desktop_banner_url ? partner.desktop_banner_url : partner.banner_url.desktop;
        var mobile_url = partner.mobile_banner_url ? partner.mobile_banner_url : partner.banner_url.mobile;

        var json = {
            name: partner.name,
            company_name: partner.company_name,
            email: partner.email,
            commission: partner.commission,
            address: partner.address,
            is_active: partner.is_active,
            branch_name: partner.branch_name,
            branch_code: partner.branch_code,
            agent_name: partner.agent_name,
            agent_code: partner.agent_code,
            desktop_banner_url: desktop_url,
            mobile_banner_url: mobile_url,
            callback_method: partner.callback_method,
            callback_url: partner.callback_url,
        };

        const apiUrl = baseUrl+'/partners/'+id
        const token = await AuthService.getToken()
        try {
            const response = await axios({
                url: apiUrl,
                method: 'PUT',
                data: json,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: token.user_key,
                }
            });
            return response.data
        } catch (error) {
            throw(error);
        }
    }

}