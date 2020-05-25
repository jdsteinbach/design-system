import { storiesOf } from '@storybook/vue';
import { withPortal } from '../../.storybook/decorators/withPortal';
import { withMaxWidth } from '../../.storybook/decorators/withMaxWidth';

import InnerModal from './InnerModal.vue';
import ModalTrigger from './ModalTrigger.vue';

const innerModal = storiesOf('4 - Modals|Inner Modal', module);

innerModal.addDecorator(withPortal);
innerModal.addDecorator(withMaxWidth);

innerModal.add(
  'Inner Modal',
  () => ({
    components: {
      InnerModal,
      ModalTrigger
    },
    template: `<inner-modal>
      <modal-trigger size="small" slot="trigger">
        Open Modal
      </modal-trigger>
      <ui-text
        slot="header"
        tag="h2"
        size="title"
      >
        Inner Modal
      </ui-text>
      <form-heading slot="content">
        Form Heading
      </form-heading>
      <ui-field
        slot="content"
        :model="{}"
        label="Form Field"
      />

      <ui-button slot="footer">
        Save
      </ui-button>

      <ui-text-button
        slot="footer"
        style="--button-margin-top: var(--spacing)"
      >
        Back to Top
      </ui-text-button>
    </inner-modal>`
  }),
  {
    info: {
      summary: `## Inner Modal

      The \`inner-modal\` is a modal that is inset from the viewport edge. It has an overlay color behind it.`
    }
  }
);
