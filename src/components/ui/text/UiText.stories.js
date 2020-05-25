import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withPadding } from '@/../.storybook/decorators/withPadding';

import UiText from './UiText.vue';

const sizeOptions = [
  'small',
  'body-1',
  'body-2',
  'subheading',
  'title',
  'headline',
  'display-2',
  'display-1'
];

const tagOptions = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'span',
  'div'
];

const uiText = storiesOf('2 - UI Components|Text/UI Text', module);

uiText.addDecorator(withKnobs);
uiText.addDecorator(withPadding);

uiText.add(
  'UI Text',
  () => ({
    components: { UiText },
    template: `<ui-text
      :tag="uiTextTag"
      :size="uiTextSize"
    >
      {{ uiTextText }}
    </ui-text>`,
    props: {
      uiTextSize: {
        default: select('Size', sizeOptions, 'body-1')
      },
      uiTextTag: {
        default: select('Tag', tagOptions, 'p')
      },
      uiTextText: {
        default: text('Content', 'UIText Component')
      }
    }
  }),
  {
    info: {
      summary: `The <code>ui-text</code> component is the typographic building block of the app. It contains all code necessary for all font-sizes & font-families documented in the style guide. Use it wherever you’d reach for a standard HTML text element (like <code>p</code>, <code>h2</code>, <code>span</code>).

      This component has CSS variable APIs to manage various values:

      <ul>
        <li><code>--text-margin-top</code> sets <code>margin-top</code></li>
        <li><code>--text-margin-right</code> sets <code>margin-right</code></li>
        <li><code>--text-margin-bottom</code> sets <code>margin-bottom</code></li>
        <li><code>--text-margin-left</code> sets <code>margin-left</code></li>
        <li><code>--text-font-family</code> sets <code>font-family</code></li>
        <li><code>--text-font-weight</code> sets <code>font-weight</code></li>
        <li><code>--text-font-style</code> sets <code>font-style</code></li>
        <li><code>--text-color</code> sets <code>color</code></li>
      </ul>
      `
    }
  }
);
