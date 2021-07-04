import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  serialNumber: DS.attr('string'),
  chairType: DS.belongsTo('i-i-s-chairs-chair-type', { inverse: null, async: false }),
  chairLeg: DS.hasMany('i-i-s-chairs-chair-leg', { inverse: 'chair', async: false })
});

export let ValidationRules = {
  serialNumber: {
    descriptionKey: 'models.i-i-s-chairs-chair.validations.serialNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  chairType: {
    descriptionKey: 'models.i-i-s-chairs-chair.validations.chairType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  chairLeg: {
    descriptionKey: 'models.i-i-s-chairs-chair.validations.chairLeg.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ChairE', 'i-i-s-chairs-chair', {
    serialNumber: attr('Serial number', { index: 0 }),
    chairType: belongsTo('i-i-s-chairs-chair-type', 'Chair type', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    chairLeg: hasMany('i-i-s-chairs-chair-leg', 'Chair leg', {
      number: attr('Number', { index: 0 })
    })
  });

  modelClass.defineProjection('ChairL', 'i-i-s-chairs-chair', {
    serialNumber: attr('Serial number', { index: 0 }),
    chairType: belongsTo('i-i-s-chairs-chair-type', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
