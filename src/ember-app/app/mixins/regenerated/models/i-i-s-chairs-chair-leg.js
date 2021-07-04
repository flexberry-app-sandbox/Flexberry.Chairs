import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number'),
  chair: DS.belongsTo('i-i-s-chairs-chair', { inverse: 'chairLeg', async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-chairs-chair-leg.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  chair: {
    descriptionKey: 'models.i-i-s-chairs-chair-leg.validations.chair.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ChairLegE', 'i-i-s-chairs-chair-leg', {
    number: attr('Number', { index: 0 })
  });
};
