import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import UiAligner from './UiAligner.vue';

const alignmentHzOptions = [
  'center',
  'start',
  'end',
  'space-between',
  'space-around'
];

const alignmentVtOptions = [
  'center',
  'start',
  'end',
  'baseline'
];

const uiAligner = storiesOf('2 - UI Components|Layout/UI Aligner', module);

uiAligner.addDecorator(withKnobs);

uiAligner.add(
  'UI Aligner',
  () => ({
    components: { UiAligner },
    template: `<ui-aligner
      :background="uiAlignerBackground"
      :horizontal="uiAlignerHorizontal"
      :vertical="uiAlignerVertical"
    >
      <ui-text size="title">Item Section Heading</ui-text>
      <ui-text-button size="small">Add Item</ui-text-button>
    </ui-aligner>`,
    props: {
      uiAlignerBackground: {
        default: boolean('Background', false)
      },
      uiAlignerHorizontal: {
        default: select('Horizontal', alignmentHzOptions, 'space-between')
      },
      uiAlignerVertical: {
        default: select('Vertical', alignmentVtOptions, 'center')
      }
    }
  }),
  {
    info: {
      summary: `## UI Aligner

      The \`ui-aligner\` component spreads out its contents: 1st at the left, last at the right.

      Its \`horizontal\` property takes any valid [Flexbox \`align-items\` value](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

      Its \`vertical\` property takes any valid [Flexbox \`justify-content\` value](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).

      Its \`background\` property automatically adds \`padding\`.

      Note: \`ui-aligner\` doesn’t put any spacing between elements. Components \`ui-text\`, \`ui-text-button\`, and \`ui-button\` have CSS variable APIs for margins.`
    }
  }
);
