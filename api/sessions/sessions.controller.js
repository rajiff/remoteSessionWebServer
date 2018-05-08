const sessionService = require('./sessions.service');
const roomService = require('../rooms/rooms.service');
const speakerService = require('../speakers/speaker.service');

/**
 *
 */
const registerNewSession = function(newSessionObj, done) {
	// Register a session
	// Ensure room is allocated, speaker is notified and marked engaged, invite participants

	sessionService.registerNewSession(newSessionObj, done);

	// async.waterfall[
	// 	// sessionService.registerNewSession.bind(null, newSessionObj),
	// 	// roomService.allocateRoom,
	// 	// speakerService.assignSpeaker,
	// 	// particpantService.inviteParticipants
	// ], done);
}

module.exports = {
	registerNewSession
}