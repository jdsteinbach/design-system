import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withPadding } from '@/../.storybook/decorators/withPadding';

const uiFieldset = storiesOf('3 - Forms|Layout/UI Fieldset', module);

uiFieldset.addDecorator(withKnobs);
uiFieldset.addDecorator(withPadding);

uiFieldset.add(
  'UI Fieldset',
  () => ({
    template: `<ui-fieldset
      :label="uiFieldsetLabel"
    >
      <ui-field
        label="Option 1"
        name="set"
        :type="uiFieldsetType"
      />
      <ui-field
        label="Option 2"
        name="set"
        :type="uiFieldsetType"
      />
      <ui-field
        label="Option 3"
        name="set"
        :type="uiFieldsetType"
      />
    </ui-fieldset>`,
    props: {
      uiFieldsetLabel: {
        default: text('Label', 'Fieldset Label')
      },
      uiFieldsetType: {
        default: select('Type', ['checkbox', 'radio'], 'checkbox')
      }
    }
  }),
  {
    info: {
      summary: `## UI Fieldset

      The \`ui-fieldset\` wrapper should contain a group of \`ui-field\` elements with \`type="radio"\` or \`type="checkbox"\`.

      To properly associate those fields in the browser, they must have the same \`name\`.`
    }
  }
);
