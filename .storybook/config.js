import Vue from 'vue';
import Vuex from 'vuex';

import { configure, addDecorator, addParameters } from '@storybook/vue';
import { themes } from '@storybook/theming';
import { withInfo, setDefaults } from 'storybook-addon-vue-info'

addDecorator(withInfo);
setDefaults({
  header: false
});

addParameters({
  options: {
    theme: themes.light,
    storySort: (a, b) => {
      return a[1].id > b[1].id ? 1 : -1;
    }
  }
});

import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

import '../src/components/_globals';

// Filters
import {
  ago,
  dateTimeBullet,
  prettyDate,
  prettyDateShort
} from '../src/filters/date-filters';
import { fromCents, salary } from '../src/filters/money-filters';
import { verbalBoolean } from '../src/filters/string-filters';

Vue.filter('ago', ago);
Vue.filter('dateTimeBullet', dateTimeBullet);
Vue.filter('prettyDate', prettyDate);
Vue.filter('prettyDateShort', prettyDateShort);
Vue.filter('fromCents', fromCents);
Vue.filter('salary', salary);
Vue.filter('verbal-boolean', verbalBoolean);

import Modal from '../src/components/Modal';
Vue.component('modal', Modal);

import VueSVGIcon from 'vue-svgicon';
Vue.use(VueSVGIcon);

import Portal from 'portal-vue';
Vue.use(Portal);

import VShowSlide from 'v-show-slide';
Vue.use(VShowSlide);

Vue.use(Vuex);

// automatically import all files ending in *.stories.js
configure(
  require.context(
    '../src',
    true,
    /\.stories\.js$/
  ),
  module
);
