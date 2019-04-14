import * as tapTypes from './tap-types';
/**
 * Scan a folder, running parser on each file it finds
 * - TODO: implement configObjs.state and configObjs.catalog, which are just stubs for now
 * - TODO: use interfaces instead of "any" here
 * @param configObjs
 * @param parser
 */
export declare function scanDir(configObjs: tapTypes.allConfigs, parser: any): Promise<null | undefined>;
