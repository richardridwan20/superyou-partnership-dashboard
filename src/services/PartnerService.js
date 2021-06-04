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

    updatePartnerById: async function(partner){
        // console.log(partner);

        // var json = {
        //     name: 'Sequis',
        //     company_name: 'PT Asuransi Jiwa Sequis Life 222',
        //     email: 'sequis@email.com',
        //     commission: '0',
        //     address: 'Jalan Jenderal Sudirman no 84',
        //     is_active: 'true',
        //     branch_name: '',
        //     branch_code: '',
        //     agent_name: '',
        //     agent_code: '',
        //     desktop_banner_url: '',
        //     mobile_banner_url: '',
        //     callback_method: 'GET',
        //     callback_url: 'https://reqres.in/api/products/3'
        // };
        
        const apiUrl = baseUrl+'/partners/fd76a03a-848e-4434-989c-17331f951095'
        const token = await AuthService.getToken()
        try {
            const response = await axios({
                url: apiUrl,
                method: 'PUT',
                data: partner,
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