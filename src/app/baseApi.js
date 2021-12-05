const axios = require('axios');
const printer = require('../config/support/logger');

class BaseApi {
    constructor() {
        this.axios = axios;
        const environments = {
            local: 'http://localhost:1234',
            prod: 'http://prod.server.com'
        }
        const defaultEnv = process.env.npm_config_env || 'local';
        this.axios.defaults.baseURL = environments[defaultEnv];
    }

    async get(url) {
        const data = {
            method: 'GET',
            url
        }
        try {
            const resp = await this.axios(data);
            // console.log(`GET ${this.axios.defaults.baseURL}${url} request is completed with status code ${resp.status}`);
            printer.print('method', `GET ${this.axios.defaults.baseURL}${url} request is completed with status code ${resp.status}`);
            return resp;
        } catch (err) {
            if (err.response) {
                // console.log(`GET ${this.axios.defaults.baseURL}${url} request is completed with status code ${err.response.status}`);
                printer.print('WARN', `GET ${this.axios.defaults.baseURL}${url} request is completed with status code ${err.response.status}`);
                return err.response;
            }
            // console.log(`GET ${this.axios.defaults.baseURL}${url} request is completed with error ${err.message}`);
            printer.print('ERROR', `GET ${this.axios.defaults.baseURL}${url} request is completed with error ${err.message}`);
            throw err;
        }
    }

}

module.exports = BaseApi;