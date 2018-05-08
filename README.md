Problem Domain
- Remote participants attend live session online at scheduled date & time
- Multiple such sessions happening concurrently with different set of speakers & participants
- Each session has its own Rooms/Studio/Session link
- During the session people chat or discuss about the context of the live session.

Domain entities / Process entities
- Sessions
- Discussions
- Rooms or Studio
- Participants
- Speakers
- Schedule
- Participation
- Feedback

Domain Resource
- Sessions
		-> Have Speakers, Participants, Schedule, Discussion
		-> Requires Room or Studio

- Discussions
- Rooms or Studio
- Participants
- Speakers
- Schedule
- Participation
	-> Requires Participants
	-> Have Discussions
	-> Have duration of active

Identify Essential API Requests
- Queries on the system
	-> Get All session along with participants attending a session, also get its discussions
	-> Get speakers
	-> Get available Rooms
	-> Assign a room to a session, or block a room for a session
	-> Create a session and add participants, set a schedule to it

1. Create Session
		-> Attach speaker
		-> Attach a room
		-> Attach a schedule
		-> Attach participants

URI identification
GET /sessions/ : Returns every session in the system, optionally paginated & sorted





2. Listing of Sessions and its details, chronologically based on session schedule (immediate happening session will appear on top)

3. View all Rooms, filter for available, blocked

4. Speakers, who are taking session, who are available

5. Get all discussion threads for a session

6. Post comments/discussion threads to a session


