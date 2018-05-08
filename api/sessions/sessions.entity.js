const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	// UNIQUE Reference, usable in code
	link: {type: String, unique: true },
	title: { type: string, index: true, require: true },
	description: { type: String, required: true, default: ''},
	// EMBEDDED
	schedule: {
		startDateTime: { type: Date, required: true },
		endDateTime: { type: Date, required: true }
	},
	// REFERENCING
	speakers: [String],
/*	speakers: [
		{
			name: {type: String, required: true},
			email: { type: String, required: true}
		}
	],*/
	location: { type: String, default: 'online'},
	// REFERENCE
	room: { type: String, required: true, default: "studio"},
	// REFERENCED
	participants: [String],
	// REFERENCED, as cardinality is huge
	discussionThread: { type: String, index: true },
	createdOn: { type: Date, default: Date.now },
	modifiedOn: { type: Date, default: Date.now }
}, { collection: 'sessions'});

module.exports = mongoose.model('sessions', schema);