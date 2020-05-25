import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';


const fadeIn = storiesOf(' 1 - Tokens|Animation/Fade In', module);

fadeIn.addDecorator(withKnobs);

fadeIn.add(
  'Fade In',
  () => ({
    template: `<fade-in>
      <div v-if="isShown" :style="demoStyles"></div>
    </fade-in>`,
    props: {
      isShown: {
        default: boolean('Show Content', false)
      }
    },
    data() {
      return {
        demoStyles: `
          height: 100vh;
          background: var(--color-brand-1);
        `
      };
    }
  }),
  {
    info: {
      summary: `The <code>fade-in</code> is an animation wrapper. Elements in it fade in & out with no motion.

      Toggle this animation with the **Show Content** box in this Story's Knobs.`
    }
  }
);
