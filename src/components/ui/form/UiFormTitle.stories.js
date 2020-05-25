import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

const uiFormTitle = storiesOf('3 - Forms|Text/UI Form Title', module);

uiFormTitle.addDecorator(withKnobs);

uiFormTitle.add(
  'UI Form Title',
  () => ({
    template: `<ui-form-title>
      {{ uiFormTitleText }}
    </ui-form-title>`,
    props: {
      uiFormTitleText: {
        default: text('Content', 'UI Form Title')
      }
    }
  }),
  {
    info: {
      summary: `## UI Form Title

      The \`ui-form-title\` is an opinionated \`ui-text\` wrapper (\`h2\` & \`size="title"\`): use it for any main form titles.

      (For form section headings, use \`form-heading\`.)`
    }
  }
);
