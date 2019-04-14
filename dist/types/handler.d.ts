/**
 * The exports in this file can be set as "handlers" (entry points) for AWS Lambda functions;
 * e.g. ```export function hello...``` in handler.js is accessible as "handler.hello".
 *
 * For automated Serverless deployment this is setup is managed in serverless.yml.
 * Search for handler.hello to see how is is done.
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
export declare function hello(event: any, context: any, callback: any): void;
export declare function handleFileTrigger1(event: any, context: any, callback: any): void;
export declare function handleFileTrigger(event: any, context: any, callback: any): void;
