import { Serializer as ChairTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-chairs-chair-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ChairTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
