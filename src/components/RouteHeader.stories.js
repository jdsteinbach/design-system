import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import { withKnobs, text } from '@storybook/addon-knobs';

import RouteHeader from './RouteHeader.vue';

const routeHeader = storiesOf('5 - Misc|Route/Route Header', module);

routeHeader.addDecorator(withKnobs);
routeHeader.addDecorator(StoryRouter());

routeHeader.add(
  'Route Header',
  () => ({
    components: { RouteHeader },
    template: `<route-header href="#">
      {{ routeHeaderText }}
    </route-header>`,
    props: {
      routeHeaderText: {
        default: text('Content', 'RouteHeader Component')
      }
    }
  }),
  {
    info: {
      summary: `The <code>route-header</code> contains the current route title and a link back to the previous route.)`
    }
  }
);
