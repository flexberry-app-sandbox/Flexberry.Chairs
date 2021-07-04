import { Serializer as ChairSerializer } from
  '../mixins/regenerated/serializers/i-i-s-chairs-chair';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ChairSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
