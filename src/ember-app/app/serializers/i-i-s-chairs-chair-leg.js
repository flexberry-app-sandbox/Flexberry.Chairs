import { Serializer as ChairLegSerializer } from
  '../mixins/regenerated/serializers/i-i-s-chairs-chair-leg';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ChairLegSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
