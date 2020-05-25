import Vue from 'vue';

import App from '@/App.vue';

import PortalVue from 'portal-vue';
import VShowSlide from 'v-show-slide';
import VueSVGIcon from 'vue-svgicon';

// Auto-import Global Components:
// * ui/**/*.vue
// * animations/**/*.vue
import '@/components/_globals';

import RouteHeader from '@/components/RouteHeader';
import RouteListHeader from '@/components/RouteListHeader';

// Navs
import ButtonsTabNav from '@/components/ButtonsTabNav';
import CollapsibleNav from '@/components/CollapsibleNav';
import DropdownNav from '@/components/DropdownNav';

// Filters
import { ago, prettyDate, prettyDateShort, dateTimeBullet } from '@/filters/date-filters';
import { fromCents, salary } from '@/filters/money-filters';
import { verbalBoolean } from '@/filters/string-filters';

Vue.config.productionTip = false;

Vue.component('route-header', RouteHeader);
Vue.component('route-list-header', RouteListHeader);
Vue.component('buttons-tab-nav', ButtonsTabNav);
Vue.component('collapsible-nav', CollapsibleNav);
Vue.component('dropdown-nav', DropdownNav);

Vue.use(PortalVue);
Vue.use(VShowSlide);
Vue.use(VueSVGIcon);

Vue.filter('ago', ago);
Vue.filter('prettyDate', prettyDate);
Vue.filter('prettyDateShort', prettyDateShort);
Vue.filter('dateTimeBullet', dateTimeBullet);
Vue.filter('fromCents', fromCents);
Vue.filter('salary', salary);
Vue.filter('verbal-boolean', verbalBoolean);

new Vue({
  render: h => h(App)
}).$mount('#app');
