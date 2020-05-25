import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withBackground } from '@/../.storybook/decorators/withBackground';

import UiButton from './UiButton.vue';

const themeOptions = [
  'primary',
  'secondary',
  'icon',
  'alert',
  'cancel'
];

const typeOptions = [
  'button',
  'submit'
];

const tagOptions = [
  'button',
  'a',
  'router-link'
];

const uiButton = storiesOf('2 - UI Components|Buttons/UI Button', module);

uiButton.addDecorator(withKnobs);
uiButton.addDecorator(withBackground);

uiButton.add(
  'Primary',
  () => ({
    components: { UiButton },
    template: `<ui-button
      :tag="uiButtonTag"
      :size="uiButtonSize ? 'small' : ''"
      :theme="uiButtonTheme"
      :type="uiButtonType"
      :disabled="uiButtonIsDisabled"
      @click="uiButtonClick('Button Clicked')"
    >
      {{ uiButtonText }}
    </ui-button>`,
    methods: {
      uiButtonClick: action('clicked')
    },
    props: {
      uiButtonTag: {
        default: select('Tag', tagOptions, 'button')
      },
      uiButtonTheme: {
        default: select('Theme', themeOptions, 'primary')
      },
      uiButtonType: {
        default: select('Type', typeOptions, 'button')
      },
      uiButtonSize: {
        default: boolean('Small', false)
      },
      uiButtonText: {
        default: text('Content', 'UI Button')
      },
      uiButtonIsDisabled: {
        default: boolean('Is Disabled?', false)
      }
    }
  }),
  {
    info: {
      summary: `The <code>ui-button</code> component emits a <code>click</code> event like a normal <code>button</code> element.

      This component is used wherever you need a button that looks like a button. (For buttons that look like inline text, check out <code>ui-text-button</code>.)

      This component has CSS variable APIs to manage various values:

      <ul>
        <li><code>--button-margin-top</code> sets <code>margin-top</code></li>
        <li><code>--button-margin-right</code> sets <code>margin-right</code></li>
        <li><code>--button-margin-bottom</code> sets <code>margin-bottom</code></li>
        <li><code>--button-margin-left</code> sets <code>margin-left</code></li>
        <li><code>--button-hz-padding</code> sets code  padding-right</code> & <code>padding-left</code></li>
        <li><code>--button-display</code> sets <code>display</code></li>
        <li><code>--button-width</code> sets <code>width</code></li>
        <li><code>--button-height</code> sets <code>height</code></li>
        <li><code>--button-font-weight</code> sets <code>font-weight</code></li>
        <li><code>--button-text-align</code> sets <code>text-align</code></li>
      </ul>`
    }
  }
);
