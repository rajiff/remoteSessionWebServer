const sessionDAO = require('./sessions.dao');
const uuidv4 = require('uuid/v4');

function generateUniqueSessionLink () {
	return uuidv4();
}

const registerNewSession = function(newSessionObj, done) {
	newSessionObj.link = generateUniqueSessionLink();
	sessionDAO.saveNewSession(newSessionObj, done);
}

module.exports = {
	registerNewSession
}