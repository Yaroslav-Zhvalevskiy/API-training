const axios = require('axios');

class BaseApi {
    constructor() {
        this.axios = axios;
        this.axios.defaults.baseURL = 'http://localhost:12341';
    }

    async get(url) {
        const data = {
            method: 'GET',
            url
        }
        try {
            const resp = await this.axios(data);
            console.log(`GET ${this.axios.defaults.baseURL}${url} request is completed with status code ${resp.status}`);
            return resp;
        } catch (err) {
            if (err.response) {
                console.log(`GET ${this.axios.defaults.baseURL}${url} request is completed with status code ${err.response.status}`);
                return err.response;
            }
            console.log(`GET ${this.axios.defaults.baseURL}${url} request is completed with error ${err.message}`);
            throw err;
        }
    }

}

module.exports = BaseApi;