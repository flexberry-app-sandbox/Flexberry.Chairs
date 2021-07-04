import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('chair', 'Chairs');
inflector.irregular('type', 'Types');
inflector.irregular('leg', 'Legs');

export default {};
