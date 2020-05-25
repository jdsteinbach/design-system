import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withPadding } from '@/../.storybook/decorators/withPadding';

import './UiSpacer.css';

import UiSpacer from './UiSpacer.vue';

const sizeOptions = [
  'default',
  'half',
  'quarter',
  'eighth',
  'double'
];

const uiSpacer = storiesOf('2 - UI Components|Layout/UI Spacer', module);

uiSpacer.addDecorator(withKnobs);
uiSpacer.addDecorator(withPadding);

uiSpacer.add(
  'UI Spacer',
  () => ({
    components: { UiSpacer },
    template: `<ui-spacer
      :height="uiSpacerHeight"
    />`,
    props: {
      uiSpacerHeight: {
        default: select('Height', sizeOptions, 'default')
      }
    }
  }),
  {
    info: {
      summary: `## UI Spacer

      The \`ui-Spacer\` component spreads out its contents: 1st at the left, last at the right.

      Its \`height\` property takes any valid \`ui-spacer\` value</a>.

      Its \`width\` property takes any valid \`ui-spacer\`
      value</a>.`
    }
  }
);
