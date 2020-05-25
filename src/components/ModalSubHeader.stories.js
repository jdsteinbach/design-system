import { storiesOf } from '@storybook/vue';

import ModalSubHeader from './ModalSubHeader.vue';

const modalSubHeader = storiesOf('4 - Modals|Headers/Modal Sub-Header', module);

modalSubHeader.add(
  'Modal Sub-Header',
  () => ({
    components: {
      ModalSubHeader,
    },
    template: `<modal-sub-header>
      <ui-text tag="h3" size="subheading">
        Sub-Header Text
      </ui-text>
      <ui-text-button>Close</ui-text-button>
    </modal-sub-header>`
  }),
  {
    info: {
      summary: `## Modal Sub-Header

      The \`modal-sub-header\` is a wrapper for a modal sub-header block, usually containing sub-title text & an action button. It will visually match the \`route-header\`.

      It "spreads" two elements placed inside them (like \`ui-aligner\`).`
    }
  }
);
