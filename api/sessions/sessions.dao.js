const SessionModel = require('./sessions.entity');

const saveNewSession = function (newSessionObj, done) {
	let sessionObj = new SessionModel();

	sessionObj.link = newSessionObj.link;
	sessionObj.title = newSessionObj.title;
  sessionObj.description = newSessionObj.description;
  sessionObj.schedule = {
    startDateTime: newSessionObj.schedule.startDateTime,
    endDateTime: newSessionObj.schedule.endDateTime
  };
  sessionObj.location = newSessionObj.location;
  sessionObj.room = newSessionObj.room;
  sessionObj.speakers = newSessionObj.speakers;
  sessionObj.participants = newSessionObj.participants;

  sessionObj.save((err, savedSessionObj) => {
  	if(err) {
  		logger.error("Error in saving session ", err);
  		return done("DB Error in register of saveNewSession");
  	}
  	// Manipulation
  	done(null, savedSessionObj);
  	return;
  })
}

module.exports {
	saveNewSession
}