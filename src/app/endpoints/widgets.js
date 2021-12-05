const BaseApi = require('../baseApi');

class Widgets extends BaseApi {
    async getSummary() {
        return this.get('/widgets/summary.json');
    }
}

module.exports = Widgets;