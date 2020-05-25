import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';

import ButtonsTabNav from './ButtonsTabNav.vue';

const buttonsTabNav = storiesOf('5 - Misc|Nav/Buttons Tab Nav', module);

buttonsTabNav.addDecorator(withKnobs);

buttonsTabNav.add(
  'Buttons Tab Nav',
  () => ({
    components: { ButtonsTabNav },
    template: `<buttons-tab-nav
      :active="buttonsTabNavActive"
      :tabs="[
        'Tab A',
        'Tab B',
        'Tab C'
      ]"
    />`,
    props: {
      buttonsTabNavActive: {
        default: select('Active', ['Tab A', 'Tab B', 'Tab C'], 'Tab A')
      }
    }
  }),
  {
    info: {
      summary: `## Buttons Tab Nav

      The \`buttons-tab-nav\` component expands & collapses inline: it will push following content down.

      This component is designed to hold links to navigate to new URLs.`
    }
  }
);
