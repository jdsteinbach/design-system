import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const slideFromRight = storiesOf(' 1 - Tokens|Animation/Slide From Right', module);

slideFromRight.addDecorator(withKnobs);

slideFromRight.add(
  'Slide From Right',
  () => ({
    template: `<slide-from-right>
      <div v-if="isShown" :style="demoStyles"></div>
    </slide-from-right>`,
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
      summary: `The <code>slide-from-right</code> is an animation wrapper. Elements in it slide in & out from the right of the viewport.

      It requires its child to be fixed position (like a modal).

      Toggle this animation with the **Show Content** box in this Story's Knobs.`
    }
  }
);
