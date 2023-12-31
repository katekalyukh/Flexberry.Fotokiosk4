import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk4-отправ-на-почту', 'Unit | Model | i-i-s-fotokiosk4-отправ-на-почту', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fotokiosk4-доп-настройки',
    'model:i-i-s-fotokiosk4-клиент',
    'model:i-i-s-fotokiosk4-оплата',
    'model:i-i-s-fotokiosk4-отправ-на-почту',
    'model:i-i-s-fotokiosk4-печать-фото',
    'model:i-i-s-fotokiosk4-сделать-фото',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
