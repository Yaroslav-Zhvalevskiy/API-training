const BaseApi = require('./baseApi');
const chai = require('chai');
const Widgets = require('./endpoints/widgets');
const schema = require('./schemas/schema');
chai.use(require('chai-json-schema'));

class Api extends BaseApi {
    expect = chai.expect;

    widgets = new Widgets();

    schema = schema;
}

module.exports = new Api();