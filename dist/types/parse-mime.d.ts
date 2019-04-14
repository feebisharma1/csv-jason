/** Parse MIME files using [Nodemailer.Mailparser](https://nodemailer.com/extras/mailparser/)
 *
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
import * as tapTypes from './tap-types';
/** Convert the Mime message into json */
export declare function parseItem(mimeEmail: Buffer): Promise<tapTypes.streamRecord>;
