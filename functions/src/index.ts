import * as functions from "firebase-functions";

const hello = functions.https.onCall((_data): { text: string } => {
  return { text: "Hello from a Cloud Function" };
});

exports.hello = hello;
