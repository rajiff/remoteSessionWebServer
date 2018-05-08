const router = require('express').Router();
const sessionsController = require('./sessions.controller');
const logger = require('../logger');

// Effective URL '/sessions'
router.post('/', function (req, res) {
	try {
		let newSessionObj = req.body;
		// Validation
		sessionsController.registerNewSession(newSessionObj, (err, result) => {
			if(err) {
				logger.error('Failed to complete operation for registering new Session, ERROR::', err);
				res.status(400).send("Failed to register a session, please try later..!");
				return;
			}
			res.status(201).send(result);
			return;
		})
	} catch(err) {
		logger.error('API error for POST /SESSION ERROR::', err);
		res.status(500).send('Server encountered error, please try later...!');
	}
})