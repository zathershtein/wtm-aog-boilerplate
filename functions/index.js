// Import the Dialogflow module and response creation dependencies
// from the Actions on Google client library.
const {dialogflow, Permission, Suggestions} = require('actions-on-google');
const functions = require('firebase-functions');

const cities = require('./cities.js');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
	conv.ask('Hello World!');
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
