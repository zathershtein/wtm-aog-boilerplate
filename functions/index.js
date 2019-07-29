// Import the Dialogflow module and response creation dependencies
// from the Actions on Google client library.
const {dialogflow, Permission, Suggestions} = require('actions-on-google');
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});
const cities = require('../data/cities.js');

app.intent('Default Welcome Intent', (conv) => {
	conv.ask('Hello World!');
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
