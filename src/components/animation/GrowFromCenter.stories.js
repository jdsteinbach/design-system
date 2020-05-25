import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const growFromCenter = storiesOf(' 1 - Tokens|Animation/Grow From Center', module);

growFromCenter.addDecorator(withKnobs);

growFromCenter.add(
  'Grow From Center',
  () => ({
    template: `<grow-from-center>
      <div v-if="isShown" :style="demoStyles"></div>
    </grow-from-center>`,
    props: {
      isShown: {
        default: boolean('Show Content', false)
      }
    },
    data() {
      return {
        demoStyles: `
          height: 100vh;
          width: 100vw;
          background: var(--color-brand-1);
          position: fixed;
          top: 0;
          left: 0;
        `
      };
    }
  }),
  {
    info: {
      summary: `The <code>grow-from-center</code> is an animation wrapper. Elements in it grow in & out from the center of their screen.

      It requires its child to be fixed position (like a modal).

      Toggle this animation with the **Show Content** box in this Story's Knobs.`
    }
  }
);
