import { getResolver } from './resolver'
import { HealthDidController } from './controller'
import {
  bytes32toString,
  DEFAULT_REGISTRY_ADDRESS,
  identifierMatcher,
  interpretIdentifier,
  legacyAlgoMap,
  legacyAttrTypes,
  stringToBytes32,
  verificationMethodTypes,
  Errors,
} from './helpers'

export {
  DEFAULT_REGISTRY_ADDRESS as REGISTRY,
  getResolver,
  bytes32toString,
  stringToBytes32,
  HealthDidController,
  /**@deprecated */
  legacyAlgoMap as delegateTypes,
  /**@deprecated */
  legacyAttrTypes as attrTypes,
  verificationMethodTypes,
  identifierMatcher,
  interpretIdentifier,
  Errors,
}
