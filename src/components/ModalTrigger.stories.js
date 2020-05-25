import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withBackground } from '@/../.storybook/decorators/withBackground';

import ModalTrigger from './ModalTrigger.vue';

const themeOptions = [
  'primary',
  'secondary',
  'icon',
  'alert',
  'cancel'
];

const modalTrigger = storiesOf('4 - Modals|Triggers/Modal Trigger', module);

modalTrigger.addDecorator(withKnobs);
modalTrigger.addDecorator(withBackground);

modalTrigger.add(
  'Modal Trigger',
  () => ({
    components: {
      ModalTrigger,
    },
    template: `<modal-trigger
      :size="modalTriggerSize ? 'small' : ''"
      :theme="modalTriggerTheme"
      @click="modalTriggerClick('Trigger Clicked')"
    >
      {{ modalTriggerText }}
    </modal-trigger>`,
    methods: {
      modalTriggerClick: action('clicked')
    },
    props: {
      modalTriggerTheme: {
        default: select('Theme', themeOptions, 'primary')
      },
      modalTriggerSize: {
        default: boolean('Small', false)
      },
      modalTriggerText: {
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
