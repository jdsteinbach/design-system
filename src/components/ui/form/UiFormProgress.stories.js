import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

const progressOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1
};

const uiFormProgress = storiesOf('3 - Forms|Misc/UI Form Progress', module);

uiFormProgress.addDecorator(withKnobs);

uiFormProgress.add(
  'UI Form Progress',
  () => ({
    template: `<ui-form-progress
      :label="uiFormProgressLabel"
      :progress="uiFormProgressProgress"
      :labelHidden="uiFormProgressLabelHidden"
    />`,
    props: {
      uiFormProgressLabel: {
        default: text('Content', 'Progress:')
      },
      uiFormProgressProgress: {
        default: number('Progress', 0, progressOptions)
      },
      uiFormProgressLabelHidden: {
        default: boolean('LabelHidden', false)
      }
    }
  }),
  {
    info: {
      summary: `## UI Form Progress

      The \`ui-form-progress\` component displays the current percent (0-100) progress in a multi-step form.

      The \`label\` defaults to "Progress:" but can be overridden and/or hidden.

      An action button can be passed in as a child. It'll be displayed at the right end of the progress bar.`
    }
  }
);

uiFormProgress.add(
  'UI Form Progress with Action',
  () => ({
    template: `<ui-form-progress
      :label="uiFormProgressLabel"
      :progress="uiFormProgressProgress"
      :labelHidden="uiFormProgressLabelHidden"
    >
      <ui-text-button>
        Cancel
      </ui-text-button>
    </ui-form-progress>`,
    props: {
      uiFormProgressLabel: {
        default: text('Content', 'Progress:')
      },
      uiFormProgressProgress: {
        default: number('Progress', 0, progressOptions)
      },
      uiFormProgressLabelHidden: {
        default: boolean('LabelHidden', false)
      }
    }
  }),
  {
    info: {
      summary: `## UI Form Progress + Action

      The \`ui-form-progress\` component displays the current percent (0-100) progress in a multi-step form.

      The \`label\` defaults to "Progress:" but can be overridden and/or hidden.

      An action button can be passed in as a child. It'll be displayed at the right end of the progress bar.`
    }
  }
);
