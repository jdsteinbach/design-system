import { storiesOf } from '@storybook/vue';
import { withPadding } from '@/../.storybook/decorators/withPadding';

import UiDivider from './UiDivider.vue';

const uiDivider = storiesOf('2 - UI Components|Layout/UI Divider', module);

uiDivider.addDecorator(withPadding);

uiDivider.add(
  'UI Divider',
  () => ({
    components: { UiDivider },
    template: `<ui-divider />`
  }),
  {
    info: {
      summary: `## UI Divider

      The \`ui-divider\` component provides a simple separator.

      \`ui-divider\` has a CSS variable APIs for margins & color:

      * \`--divider-margin-top\`: default value \`0\`
      * \`--divider-margin-right\`: default value \`0\`
      * \`--divider-margin-bottom\`: default value \`0\`
      * \`--divider-margin-left\`: default value \`0\`
      * \`--divider-height\`: default value \`1px\`
      * \`--divider-color\`: default value \`var(--color-border)\``
    }
  }
);
