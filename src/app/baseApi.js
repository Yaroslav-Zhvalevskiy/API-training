const axios = require('axios');

class BaseApi {
    constructor() {
        this.axios = axios;
        this.axios.defaults.baseURL = 'http://localhost:1234';
    }

    async get(url) {
        const data = {
            method: 'GET',
            url
        }
        try {
            return this.axios(data);
        } catch (err) {
            throw err;
        }
    }

}

module.exports = BaseApi;