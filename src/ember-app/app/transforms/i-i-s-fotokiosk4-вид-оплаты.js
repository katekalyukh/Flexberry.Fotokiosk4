import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидОплатыEnum from '../enums/i-i-s-fotokiosk4-вид-оплаты';

export default FlexberryEnum.extend({
  enum: ВидОплатыEnum,
  sourceType: 'IIS.Fotokiosk4.ВидОплаты'
});
