import { storiesOf } from '@storybook/vue';
import { withPortal } from '../../.storybook/decorators/withPortal';
import { withMaxWidth } from '../../.storybook/decorators/withMaxWidth';

import Modal from './Modal.vue';
import ModalHeader from './ModalHeader.vue';
import ModalSubHeader from './ModalSubHeader.vue';

const info = {
  summary: `## Modal

  The \`modal\` is a modal that fills the viewport. It has slots for header, content & footer. If the elements placed in the content slot are taller than the viewport allows, the content slot will provide vertical scrolling, leaving the header & footer slots at the top and bottom of the viewport.

  There are two styled modal child components. Both components automatically "spread" two elements placed inside them (like \`ui-aligner\`).

  * \`modal-header\` matches the global \`app-header\` (dark background)
  * \`modal-sub-header\` matches the \`route-header\` (light background)

  Modals should be created with a \`portal\` wrapper, using \`v-if\` or similar visibility logic with an animation helper component.

  Example:

  \`\`\`html
  <portal to="overlay">
    <slide-from-left></slide-from-left>
      <modal v-if="isModalOpen">…</modal>
    </slide-from-left>
  </portal>
  \`\`\``
};

const modal = storiesOf('4 - Modals|Modal', module);

modal.addDecorator(withPortal);
modal.addDecorator(withMaxWidth);

modal.add(
  'Modal',
  () => ({
    components: {
      Modal,
      ModalHeader
    },
    template: `<modal>
      <modal-header slot="header">
        <ui-text tag="h2" size="title">
           Header Text
        </ui-text>
      </modal-header>
      <form slot="content">
        <ui-form-title style="--text-margin-top: 0">
          Form Title
        </ui-form-title>
        <ui-text style="--text-margin-bottom: var(--spacing-half)">
          Here's a example of a modal containing a form with a field.
        </ui-text>
        <ui-field
          slot="content"
          :model="{}"
          label="Form Field"
        />
      </form>
      <ui-button slot="footer">
        Save
      </ui-button>
    </modal>`
  }),
  {
    info
  }
);

modal.add(
  'Modal with Sub-Header',
  () => ({
    components: {
      Modal,
      ModalHeader,
      ModalSubHeader
    },
    template: `<modal>
      <modal-header slot="header">
        <ui-text tag="h2" size="title">
          Header Text
        </ui-text>
        <ui-text-button>Close</ui-text-button>
      </modal-header>
      <modal-sub-header slot="header">
        <ui-text
          tag="h3"
          size="subheading"
        >
           Sub-Header Text
        </ui-text>
        <ui-text-button>Cancel</ui-text-button>
      </modal-sub-header>
      <form slot="content">
        <ui-form-title style="--text-margin-top: 0">
          Form Title
        </ui-form-title>
        <ui-text style="--text-margin-bottom: var(--spacing-half)">
          Here's a example of a modal containing a form with a field.
        </ui-text>
        <ui-field
          slot="content"
          :model="{}"
          label="Form Field"
        />
      </form>
      <ui-button slot="footer">
        Save
      </ui-button>
    </modal>`
  }),
  {
    info
  }
);

modal.add(
  'Modal with Motion',
  () => ({
    components: {
      Modal,
      ModalHeader
    },
    template: `<div>
      <ui-button size="small" @click="openModal">Show Modal</ui-button>
      <portal to="overlay">
        <slide-from-bottom>
          <modal v-if="isModalOpen">
            <modal-header slot="header">
              <ui-text tag="h2">
                Moving Modal
              </ui-text>
              <ui-text-button @click="closeModal">
                Close
              </ui-text-button>
            </modal-header>
            <ui-form-title slot="content">
              Modal Contents Here
            </ui-form-title>
            <ui-button @click="closeModal" slot="footer">
              Close
            </ui-button>
          </modal>
        </slide-from-bottom>
      </portal>
    </div>`,
    data() {
      return {
        isModalOpen: false
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      }
    }
  }),
  {
    info
  }
);
