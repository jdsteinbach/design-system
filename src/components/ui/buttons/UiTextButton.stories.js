import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withBackground } from '@/../.storybook/decorators/withBackground';

import UiTextButton from './UiTextButton.vue';

const themeOptions = [
  'primary',
  'secondary',
  'light',
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

const uiTextButton = storiesOf('2 - UI Components|Buttons/UI Text Button', module);

uiTextButton.addDecorator(withKnobs);
uiTextButton.addDecorator(withBackground);

uiTextButton.add(
  'Primary',
  () => ({
    components: { UiTextButton },
    template: `<ui-text-button
      :tag="uiTextButtonTag"
      :size="uiTextButtonSize"
      :theme="uiTextButtonTheme"
      :type="uiTextButtonType"
      :href="uiTextButtonHref"
      :to="uiTextButtonTo"
      :disabled="uiTextButtonIsDisabled"
      @click="uiTextButtonClick('Text Button Clicked')"
    >
      {{ uiTextButtonText }}
    </ui-text-button>`,
    methods: {
      uiTextButtonClick: action('clicked')
    },
    props: {
      uiTextButtonTag: {
        default: select('Tag', tagOptions, 'button')
      },
      uiTextButtonTheme: {
        default: select('Theme', themeOptions, 'primary')
      },
      uiTextButtonType: {
        default: select('Type', typeOptions, 'button')
      },
      uiTextButtonText: {
        default: text('Content', 'UI Text Button')
      },
      uiTextButtonHref: {
        default: text('HREF (for anchor)', '#anchor')
      },
      uiTextButtonTo: {
        default: text('To (for Router Link)', '#')
      },
      uiTextButtonIsDisabled: {
        default: boolean('Is Disabled?', false)
      }
    }
  }),
  {
    info: {
      summary: `The <code>ui-text-button</code> component emits a <code>click</code> event like a normal <code>button</code> element.

      This component is used wherever you need a button that looks like inline text. (For buttons that look like real buttons, check out <code>ui-button</code>.)

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
