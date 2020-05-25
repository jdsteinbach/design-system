import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

const uiFormOptional = storiesOf('3 - Forms|Text/UI Form Optional', module);

uiFormOptional.addDecorator(withKnobs);

uiFormOptional.add(
  'UI Form Optional',
  () => ({
    template: `<ui-form-optional>
      {{ uiFormOptionalText }}
    </ui-form-optional>`,
    props: {
      uiFormOptionalText: {
        default: text('Content', 'Age and birthdate are optional.')
      }
    }
  }),
  {
    info: {
      summary: `## UI Form Optional

      The \`ui-form-optional\` is an opinionated \`ui-text\` wrapper (\`p\`, bold, italic): use it for any form headings that mark the following fields as optional.`
    }
  }
);
