"use strict";
/** Parse MIME files using [Nodemailer.Mailparser](https://nodemailer.com/extras/mailparser/)
 *
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Updated mailparser to 2.2.0 to avoid malicious getcookies module; see https://blog.npmjs.org/post/173526807575/reported-malicious-module-getcookies
Consider mailparse (https://github.com/javascriptlove/mailparse) for the future, since mailparser will no longer be maintained. Mailparse does not yet have any TypeScript types available.
*/
const mailparser = require("mailparser");
//var mp = mailparser.MailParser; // low-level parser
var sp = mailparser.simpleParser; // higher-level parser (easier to use, not as efficient)
const tapTypes = require("./tap-types");
/** Convert the Mime message into json */
function parseItem(mimeEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        let parsed = yield sp(mimeEmail); // sp returns a promise; await waits for it, strips the result out and puts that result into the "parsed" variable
        let rec = new tapTypes.streamRecord();
        rec.stream = 'email';
        rec.time_extracted = new Date();
        rec.record = parsed;
        return rec;
    });
}
exports.parseItem = parseItem;
//# sourceMappingURL=parse-mime.js.map