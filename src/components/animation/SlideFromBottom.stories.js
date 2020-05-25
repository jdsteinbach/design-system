import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const slideFromBottom = storiesOf(' 1 - Tokens|Animation/Slide From Bottom', module);

slideFromBottom.addDecorator(withKnobs);

slideFromBottom.add(
  'Slide From Bottom',
  () => ({
    template: `<slide-from-bottom>
      <div v-if="isShown" :style="demoStyles"></div>
    </slide-from-bottom>`,
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
      summary: `The <code>slide-from-bottom</code> is an animation wrapper. Elements in it slide in & out from the bottom of the viewport.

      Toggle this animation with the **Show Content** box in this Story's Knobs.`
    }
  }
);
