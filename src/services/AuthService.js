import axios from 'axios';

const baseUrl = process.env.REACT_APP_PARTNERSHIP_API_URL;

export default {

    getToken: async function(){
        const apiUrl = baseUrl+'/users/token'
        var formData = new FormData();
        formData.append('username', 'admin@superyou.com');
        formData.append('password', 'Abcd1234');
        try {
            const response = await axios({
                url: apiUrl,
                method: 'POST',
                data: formData,
                headers: {
                    Accept: 'application/json'
                }
            });
            return response.data
        } catch (error) {
            throw(error);
        }
    }

}