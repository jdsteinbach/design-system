import { storiesOf } from '@storybook/vue';

import properties from '@/../.storybook/utils/custom-props';

const { color: colorValues } = properties;

const colors = storiesOf('1 Tokens|Colors', module);

colors.add(
  'Colors',
  () => ({
    data() {
      return {
        colors: colorValues,
        styles: {
          colorContainer: {
            padding: 'var(--spacing-half)',
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-half)'
          },
          colorCard: {
            padding: 'var(--spacing-quarter)',
            border: '1px solid var(--color-gray-dark)',
            borderRadius: 'var(--spacing-quarter)',
            boxShadow: '0 var(--spacing-quarter) var(--spacing-half) calc(-1 * var(--spacing-quarter)) var(--color-gray-darker)',
            textAlign: 'center'
          },
          colorCardChip: {
            marginBottom: 'var(--spacing-quarter)',
            paddingTop: '25%',
            borderRadius: 'inherit'
          },
          colorCardName: {
            '--text-font-weight': 500,
            textTransform: 'capitalize'
          }
        }
      };
    },
    methods: {
      colorName(name) {
        return name.split('-').join(' ');
      }
    },
    template: `<section :style="styles.colorContainer">
      <div :style="styles.colorCard" v-for="c in colors" :key="c.key">
        <div :style="[styles.colorCardChip, { background: c.value }]" />
        <ui-text :style="styles.colorCardName">
          {{ colorName(c.key) }}
        </ui-text>
        <ui-text size="small">
          <code>
            {{ c.key }}
          </code>
        </ui-text>
        <ui-text size="small" :style="styles.colorCardValue">
          <code>
            {{ c.value }}
          </code>
        </ui-text>
      </div>
    </section>`
  }),
  {
    info: {
      source: false,
      summary: `## Colors
      These colors should be used throughout the app.

      Access them using the CSS custom property (variable), not the hex code:

      \`\`\`css
      .notification--success {
        border-color: #00b96b; /* <- No */
        border-color: var(--color-success); /* <- Yes */
      }
      \`\`\``
    }
  }
);
