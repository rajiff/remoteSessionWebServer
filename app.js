const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUIExpress = require('swagger-ui-express');
const YAML = require('yamljs');

let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');
app.use('/api/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDocument));

app.use((err, req, res) => {
	if(err) {
		logger.fatal('Uncaught error ', err);
		return res.status(500).send("Server encountered uncaught exception..!");
	}

	return res.status(404).send("Requested resource not found..!");
});

module.exports = app;