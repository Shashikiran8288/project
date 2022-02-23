const sampleController = require('../controllers').sample;

module.exports = (app) => {

	app.get('/api/sample', sampleController.index);

}