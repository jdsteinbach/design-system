import { storiesOf } from '@storybook/vue';

import ModalHeader from './ModalHeader.vue';

const modalHeader = storiesOf('4 - Modals|Headers/Modal Header', module);

modalHeader.add(
  'Modal Header',
  () => ({
    components: {
      ModalHeader,
    },
    template: `<modal-header>
      <ui-text tag="h2" size="title">
        Header Text
      </ui-text>
      <ui-text-button>Close</ui-text-button>
    </modal-header>`
  }),
  {
    info: {
      summary: `## Modal Header

      The \`modal-header\` is a wrapper for a modal header block, usually containing title text & an action button. It will visually match the \`app-header\`.

      It "spreads" two elements placed inside them (like \`ui-aligner\`).`
    }
  }
);
