import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import { withKnobs, text } from '@storybook/addon-knobs';

import CollapsibleNav from './CollapsibleNav.vue';

const collapsibleNav = storiesOf('5 - Misc|Nav/Collapsible Nav', module);

collapsibleNav.addDecorator(withKnobs);
collapsibleNav.addDecorator(StoryRouter());

collapsibleNav.add(
  'Collapsible Nav',
  () => ({
    components: { CollapsibleNav },
    template: `<collapsible-nav
      :title="collapsibleNavTitle"
      :links="[
        {text: 'Link A', href: '#'},
        {text: 'Link B', href: '#'},
        {text: 'Link C', href: '#'},
        {text: 'Link D', href: '#'}
      ]"
    />`,
    props: {
      collapsibleNavTitle: {
        default: text('Title', 'Nav Title')
      }
    }
  }),
  {
    info: {
      components: {
        CollapsibleNav
      },
      source: false,
      summary: `## Collapsible Nav

      The \`collapsible-nav\` component expands & collapses inline: it will push following content down.

      This component is designed to hold links to navigate to new URLs.

      For a nav that emits events (instead of following links) and allows its list to overlap following content, use \`dropdown-nav\`.

      ### Source

      \`\`\`html
      <collapsible-nav
        :title="collapsibleNavTitle"
        :links="[
          {text: 'Link A', href: '#'},
          {text: 'Link B', href: '#'},
          {text: 'Link C', href: '#'},
          {text: 'Link D', href: '#'}
        ]"
      />
      \`\`\``
    }
  }
);
