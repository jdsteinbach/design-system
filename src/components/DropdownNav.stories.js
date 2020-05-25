import { storiesOf } from '@storybook/vue';

import DropdownNav from './DropdownNav.vue';

const dropdownNav = storiesOf('5 - Misc|Nav/Dropdown Nav', module);

dropdownNav.add(
  'Dropdown Nav',
  () => ({
    components: { DropdownNav },
    template: `<dropdown-nav
      :active="{title: 'Item A', value: 'a'}"
      :items="[
        {title: 'Item A', value: 'a'},
        {title: 'Item B', value: 'b'},
        {title: 'Item C', value: 'c'},
        {title: 'Item D', value: 'd'}
      ]"
    />`
  }),
  {
    info: {
      summary: `## Dropdown Nav

      The \`dropdown-nav\` component expands & collapses with absolute positioning: it will <b>not</b> push following content down.

      This component emits \`input\` events (like a form \`input\`) that the containing context can listen for.

      For a nav that contains links (instead of emitting events) and that pushes the following content down, use \`collapsible-nav\`.`
    }
  }
);
