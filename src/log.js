let tracer = new (require("sw-logger").Logger)({namespace: "rabbot"});
if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'staging')
	tracer.addStream('stdOut', {formatter: require("sw-logger").formatters.json()});
let _ = require('lodash');
module.exports = function (idContextString) {
	if (!_.isString(idContextString))
		return tracer;
	return tracer.context(idContextString.split('.')[1]);
};
