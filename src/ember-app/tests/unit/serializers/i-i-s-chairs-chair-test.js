import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-chairs-chair', 'Unit | Serializer | i-i-s-chairs-chair', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-chairs-chair',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-chairs-chair-leg',
    'model:i-i-s-chairs-chair-type',
    'model:i-i-s-chairs-chair',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
