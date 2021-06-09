import axios from 'axios';
import { getUser } from '../utils/Common';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    uploadExcel: async function(file){
        var formData = new FormData();
        formData.append("excel", file);

        const token = getUser()
        const apiUrl = baseUrl+'/uploads/upload/'+token.user_key

        try {
            const response = await axios({
                url: apiUrl,
                data: formData,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: token,
                }
            });
            return response.data
        } catch (error) {
            throw(error);
        }
    },

}