import { storiesOf } from '@storybook/vue';
import { withPortal } from '@/../.storybook/decorators/withPortal';
import { withBackgroundDark } from '@/../.storybook/decorators/withBackgroundDark';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import LoginModal from './LoginModal.vue';
import ModalTriggerText from './ModalTriggerText.vue';

const loginModal = storiesOf('4 - Modals|Login Modal', module);

loginModal.addDecorator(withKnobs);
loginModal.addDecorator(withPortal);
loginModal.addDecorator(withBackgroundDark);

loginModal.add(
  'Login Modal',
  () => ({
    components: {
      LoginModal,
      ModalTriggerText
    },
    template: `<login-modal>
      <modal-trigger-text slot="trigger">
        Open Modal
      </modal-trigger-text>
      <ui-text
        slot="header"
        tag="h2"
        size="title"
      >
        Login Modal
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
    </login-modal>`,
    props: {
      loginModalTitle: {
        default: text('Title', 'Title')
      },
      loginModalInContent: {
        default: boolean('In Content?', false)
      }
    }
  }),
  {
    info: {
      summary: `## Login Modal

      The \`login-modal\` is a modal that contains screens for:

      * sign-in
      * create account
      * forgot password`
    }
  }
);
