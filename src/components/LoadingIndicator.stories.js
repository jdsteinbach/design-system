import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withPadding } from '@/../.storybook/decorators/withPadding';

import LoadingIndicator from './LoadingIndicator.vue';

const loadingIndicator = storiesOf('5 - Misc|Loading Indicator', module);

loadingIndicator.addDecorator(withKnobs);
loadingIndicator.addDecorator(withPadding);

loadingIndicator.add(
  'Loading Indicator',
  () => ({
    components: { LoadingIndicator },
    template: `<loading-indicator
      :text="loadingIndicatorText"
      :size="loadingIndicatorSize"
    />`,
    props: {
      loadingIndicatorText: {
        default: text('Content', 'Loading…')
      },
      loadingIndicatorSize: {
        default: select('Size', ['small', 'heading', 'title', 'default'], 'heading')
      }
    }
  }),
  {
    info: {
      summary: `## Loading Indicator

      The \`loading-indicator\` is an animated element that can be used in a component waiting on an async request.`
    }
  }
);
