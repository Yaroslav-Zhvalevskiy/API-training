const api = require('../app/api');

describe('API. Widgets', function () {
    it('Summary', async function () {
        const resp = await api.widgets.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data.reportName).to.equal('Allure Report');
        api.expect(resp.data).to.be.jsonSchema(api.schema.summary);
    });

    xit('Summary 2', async function () {
        const resp = await api.widgets.getSummary();
        console.log(resp);
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data.reportName).to.equal('Allure Report');
    });
});