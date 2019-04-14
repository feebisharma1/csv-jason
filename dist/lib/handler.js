"use strict";
/**
 * The exports in this file can be set as "handlers" (entry points) for AWS Lambda functions;
 * e.g. ```export function hello...``` in handler.js is accessible as "handler.hello".
 *
 * For automated Serverless deployment this is setup is managed in serverless.yml.
 * Search for handler.hello to see how is is done.
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
Object.defineProperty(exports, "__esModule", { value: true });
const getFile = require("./s3-getfile");
const fse = require("fs-extra");
const parse_csv_1 = require("./parse-csv");
//import * as hand from './handler';
//const hand = require('handler');
// response object for Lambda Proxy integration; see https://serverless.com/framework/docs/providers/aws/events/apigateway/
class lambdaResponse {
    constructor() {
        this.statusCode = 200;
        this.headers = {
            // TODO: limit to a whitelist of allowed sites
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
        };
        this.body = ''; // set response body here
    }
}
function hello(event, context, callback) {
    const response = new lambdaResponse();
    response.body = JSON.stringify({
        message: 'Hello! Your function executed successfully!',
        input: event
    });
    callback(null, response);
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Hello! Your function executed successfully!', event });
}
exports.hello = hello;
function handleFileTrigger1(event, context, callback) {
    const response = new lambdaResponse();
    console.log(JSON.stringify(event));
    //let h = new hand(response);
}
exports.handleFileTrigger1 = handleFileTrigger1;
function handleFileTrigger(event, context, callback) {
    const response = new lambdaResponse();
    function handleFile(contents) {
        console.log('File Contents: \n' + contents);
        parse_csv_1.parseCSV(contents).then(function (parsedObj) {
            console.log('Parsed Contents: \n' + JSON.stringify(parsedObj));
            response.body = JSON.stringify(parsedObj);
        });
    }
    if (typeof event === 'string') {
        // if event is a string then we are running locally (because on AWS event is always an object) and the string represents a filename
        fse.readFile(event).then(function (buffer) {
            handleFile(buffer);
            callback(null, response);
        });
    }
    else {
        getFile
            .getFilePromise(event.Records[0]) // this grabs only the first record, assuming we'll always only receive one at a time
            .then(function (value) {
            handleFile(value);
            return value;
        })
            .catch(function (error) {
            // Handle any error from all above steps
            console.log('final error: ', error);
            return error;
        })
            .then(function (finalResult) {
            // final .then replaces .finally
            callback(null, response);
        });
    }
}
exports.handleFileTrigger = handleFileTrigger;
//# sourceMappingURL=handler.js.map