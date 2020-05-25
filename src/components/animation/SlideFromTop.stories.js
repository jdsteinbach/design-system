import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const slideFromTop = storiesOf(' 1 - Tokens|Animation/Slide From Top', module);

slideFromTop.addDecorator(withKnobs);

slideFromTop.add(
  'Slide From Top',
  () => ({
    template: `<slide-from-top>
      <div v-if="isShown" :style="demoStyles"></div>
    </slide-from-top>`,
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
      summary: `The <code>slide-from-top</code> is an animation wrapper. Elements in it slide in & out from the top of the viewport.

      Toggle this animation with the **Show Content** box in this Story's Knobs.`
    }
  }
);
