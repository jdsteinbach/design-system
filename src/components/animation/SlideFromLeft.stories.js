import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const slideFromLeft = storiesOf(' 1 - Tokens|Animation/Slide From Left', module);

slideFromLeft.addDecorator(withKnobs);

slideFromLeft.add(
  'Slide From Left',
  () => ({
    template: `<slide-from-left>
      <div v-if="isShown" :style="demoStyles"></div>
    </slide-from-left>`,
    props: {
      isShown: {
        default: boolean('Show Content', false)
      }
    },
    data() {
      return {
        demoStyles: `
          width: 100vw;
          height: 100vh;
          background: var(--color-brand-1);
          position: fixed;
        `
      };
    }
  }),
  {
    info: {
      summary: `The <code>slide-from-left</code> is an animation wrapper. Elements in it slide in & out from the left of the viewport.

      It requires its child to be fixed position (like a modal).

      Toggle this animation with the **Show Content** box in this Story's Knobs.`
    }
  }
);
