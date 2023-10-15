import {BeforeAll, Before} from '@cucumber/cucumber';
import {init} from 'detox/internals';
import {device} from 'detox';

BeforeAll({timeout: 60 * 1000}, async () => {
  await init();
});

Before(async () => {
  await device.launchApp({newInstance: true});
});
