import { storiesOf } from '@storybook/vue';
import { withMaxWidth } from '../../.storybook/decorators/withMaxWidth';


import DropdownOptions from './DropdownOptions.vue';
import DropdownOption from './DropdownOption.vue';

const dropdownOptionsStory = storiesOf('5 - Misc|Dropdown Options', module);

dropdownOptionsStory.addDecorator(withMaxWidth);

dropdownOptionsStory.add(
  'Dropdown Options',
  () => ({
    components: {
      DropdownOptions,
      DropdownOption
    },
    template: `<div style="display: inline-block; position: relative">
      <ui-text-button
        size="small"
        @click="toggleOptions"
      >
        Toggle Dropdown
      </ui-text-button>
      <dropdown-options :is-open="dropdownOptionsOpen">
        <dropdown-option>Ok</dropdown-option>
        <dropdown-option>Not Ok</dropdown-option>
      </dropdown-options>
    </div>`,
    data() {
      return {
        dropdownOptionsOpen:  false
      };
    },
    methods: {
      toggleOptions() {
        this.dropdownOptionsOpen = !this.dropdownOptionsOpen;
      }
    }
  }),
  {
    info: {
      summary: `## Dropdown Options

      The \`dropdown-nav\` component creates a dropdown nav item. Its title is its active child’s name.`,
      components: { DropdownOptions },
    }
  }
);
