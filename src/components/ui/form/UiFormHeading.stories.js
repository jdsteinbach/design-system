import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

const uiFormHeading = storiesOf('3 - Forms|Text/UI Form Heading', module);

uiFormHeading.addDecorator(withKnobs);

uiFormHeading.add(
  'UI Form Heading',
  () => ({
    template: `<ui-form-heading>
      {{ uiFormHeadingText }}
    </ui-form-heading>`,
    props: {
      uiFormHeadingText: {
        default: text('Content', 'UI Form Heading')
      }
    }
  }),
  {
    info: {
      summary: `## UI Form Heading

      The \`ui-form-heading\` is an opinionated \`ui-text\` wrapper (\`h3\` & \`size="subheading"\`): use it for any form section headings.

      (For main form title, use \`form-title\`.)`
    }
  }
);
