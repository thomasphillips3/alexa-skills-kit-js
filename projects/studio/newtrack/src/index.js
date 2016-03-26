var APP_ID ;
var AlexaSkill = require('./AlexaSkill');

var NewTrack = function () {
    AlexaSkill.call(this, APP_ID);
};

NewTrack.prototype = Object.create(AlexaSkill.prototype);
NewTrack.prototype.constructor = NewTrack;

NewTrack.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("HelloWorld onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

NewTrack.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("NewTrack onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to the Alexa Skills Kit, you can add a new track";
    var repromptText = "You can add a new track";
    response.ask(speechOutput, repromptText);
};

NewTrack.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("HelloWorld onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

NewTrack.prototype.intentHandlers = {
    // register custom intent handlers
    "NewTrackIntent": function (intent, session, response) {
        response.tellWithCard("New Track", "Greeter", "Add new track");
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say add new track", "You can say add new track");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the NewTrack skill.
    var newTrack = new NewTrack();
    NewTrack.execute(event, context);
};