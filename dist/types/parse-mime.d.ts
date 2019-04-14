import * as tapTypes from './tap-types';
/** Convert the Mime message into json */
export declare function parseItem(mimeEmail: Buffer): Promise<tapTypes.streamRecord>;
