import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегорияEnum from '../enums/i-i-s-fotokiosk4-категория';

export default FlexberryEnum.extend({
  enum: КатегорияEnum,
  sourceType: 'IIS.Fotokiosk4.Категория'
});
