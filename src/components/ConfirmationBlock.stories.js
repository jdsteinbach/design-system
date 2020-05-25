import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import ConfirmationBlock from './ConfirmationBlock.vue';

const confirmationBlock = storiesOf('5 - Misc|Confirmation Block', module);

confirmationBlock.addDecorator(withKnobs);

confirmationBlock.add(
  'Confirmation Block',
  () => ({
    components: { ConfirmationBlock },
    template: `<confirmation-block
      :title="confirmationBlockTitle"
      :icon="confirmationBlockIcon"
      :heading="confirmationBlockHeading"
      :description="confirmationBlockDescription"
    />`,
    props: {
      confirmationBlockTitle: {
        default: text('Title', 'Account Created')
      },
      confirmationBlockIcon: {
        default: select('Icon', ['confirm-account', 'confirm-save', 'confirm-delete', 'confirm-document', 'confirm-payment'], 'confirm-account')
      },
      confirmationBlockHeading: {
        default: text('Heading', 'Thanks, friend!')
      },
      confirmationBlockDescription: {
        default: text('Description', 'Do more good work.')
      }
    }
  }),
  {
    info: {
      summary: `## Confirmation Block

      The \`confirmation-block\` provides a pattern in “confirm” dialogs.

      It displays an icon, title, heading, and description. Heading & description are optional. Spacing will adjust to their absence.`
    }
  }
);
