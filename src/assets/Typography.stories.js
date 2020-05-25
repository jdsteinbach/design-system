import { storiesOf } from '@storybook/vue';

import properties from '@/../.storybook/utils/custom-props';

const { 'font-size': typeValues } = properties;

const type = storiesOf('1 Tokens|Typography', module);

type.add(
  'Type Styles',
  () => ({
    data() {
      return {
        types: typeValues,
        styles: {
          typeRow: {
            margin: 'var(--spacing)',
            display: 'grid',
            gridTemplateColumns: '1fr 19ch 19ch',
            gap: 'var(--spacing)',
            alignItems: 'center'
          },
          typeRowName: {
            textTransform: 'capitalize'
          }
        }
      };
    },
    template: `<section>
      <div v-for="t in types" :key="t.key" :style="styles.typeRow">
        <ui-text :size="propName(t.key)" :style="styles.typeRowName">
          {{ niceName(t.key) }}
        </ui-text>
        <ui-text>
          <code>
            size="{{ propName(t.key) }}"
          </code>
        </ui-text>
        <ui-text style="justify-self: end">
          <code>
            {{ t.value }} ({{ toPx(t.value) }}px)
          </code>
        </ui-text>
      </div>
    </section>`,
    methods: {
      niceName(name) {
        let rename = this.propName(name).split('-').map(s => s.replace(/^([a-z])/gim, '$1'.toUpperCase())).join(' ');

        if (name === 'body-1') {
          rename = `${rename} (Default)`;
        }

        return rename;
      },
      propName(name) {
        return name.replace('--font-size-', '');
      },
      toPx(rem) {
        return parseFloat(rem.replace('rem', ''), 10) * 16;
      }
    }
  }),
  {
    info: {
      source: false,
      summary: `## Typography

      These values are accepted by \`ui-text\`.

      Access them using the \`<ui-text>\` component, not the pixel value:

      \`\`\`css
      /* No */
      .text-element {
        font-size: 23px;
      }
      \`\`\`
      \`\`\`html
      <!-- Yes -->
      <ui-text tag="h2" size="title">Text Content</ui-text>
      \`\`\``
    }
  }
);
