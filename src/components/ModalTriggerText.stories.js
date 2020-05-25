import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withBackground } from '@/../.storybook/decorators/withBackground';

import ModalTriggerText from './ModalTriggerText.vue';

const themeOptions = [
  'primary',
  'secondary',
  'light'
];

const modalTriggerText = storiesOf('4 - Modals|Triggers/Modal Trigger Text', module);

modalTriggerText.addDecorator(withKnobs);
modalTriggerText.addDecorator(withBackground);

modalTriggerText.add(
  'Modal Trigger Text',
  () => ({
    components: {
      ModalTriggerText,
    },
    template: `<modal-trigger-text
      :size="modalTriggerTextSize ? 'small' : ''"
      :theme="modalTriggerTextTheme"
      @click="modalTriggerTextClick('Trigger Clicked')"
    >
      {{ modalTriggerTextText }}
    </modal-trigger-text>`,
    methods: {
      modalTriggerTextClick: action('clicked')
    },
    props: {
      modalTriggerTextTheme: {
        default: select('Theme', themeOptions, 'primary')
      },
      modalTriggerTextSize: {
        default: boolean('Small', false)
      },
      modalTriggerTextText: {
        default: text('Text', 'Open Modal')
      }
    }
  }),
  {
    info: {
      summary: `## Modal Trigger

      The \`modal-trigger\` is a wrapper for a modal trigger block that should visually match the \`app-trigger\`.

      It adds a background-radius and "spreads" two elements placed inside them (like \`ui-aligner\`).`
    }
  }
);
