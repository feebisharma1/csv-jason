/**
 * This file handles configuration (command line args and config file loading) for Singer taps (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
import * as tapTypes from './tap-types';
/** return an object containing the contents of config, state and catalog files */
export declare function loadConfig(): Promise<tapTypes.allConfigs>;
