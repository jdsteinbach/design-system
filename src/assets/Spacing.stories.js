import { storiesOf } from '@storybook/vue';

import properties from '@/../.storybook/utils/custom-props';

const { spacing: spacingValues } = properties;

const spacing = storiesOf('1 Tokens|Spacing', module);

spacing.add(
  'Spacing',
  () => ({
    data() {
      return {
        spacing: spacingValues,
        styles: {
          spacingContainer: {
            margin: 'var(--spacing-half)'
          },
          spacingCard: {
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--spacing-quarter)',
            textAlign: 'center'
          },
          spacingCardCell: {
            padding: 'var(--spacing-half)',
            verticalAlign: 'middle',
            textAlign: 'left'
          },
          spacingCardChip: {
            width: 'var(--size)',
            height: 'var(--size)',
            display: 'inline-block',
            background: 'var(--color-black-faded)'
          },
          spacingCardName: {
            '--text-font-weight': 500,
            textTransform: 'capitalize'
          },
          spacingCardValue: {
            fontFamily: 'monospace'
          }
        }
      };
    },
    template: `<table :style="styles.spacingContainer">
      <tr v-for="s in spacing" :key="s.key" :style="[styles.spacingCard, { '--size': 'var(' + s.key + ')' }]">
        <td :style="styles.spacingCardCell">
          <div :style="styles.spacingCardChip" />
        </td>
        <td :style="styles.spacingCardCell">
          <ui-text style="--text-font-weight: 500">
            {{ s.key }}
          </ui-text>
        </td>
        <td :style="styles.spacingCardCell">
          <ui-text tag="code" size="small" :style="styles.spacingCardValue">
            {{ s.value }}
          </ui-text>
        </td>
      </tr>
    </table>`
  }),
  {
    info: {
      source: false,
      summary: `## Spacing

      These spacing values should be used in all \`margin\` & \`padding\` values.

      Access them using the CSS custom property (variable), not the pixel value:

      \`\`\`css
      .notification--success {
        padding: 10px; /* <- No */
        padding: var(--spacing-half); /* <- Yes */
      }
      \`\`\``
    }
  }
);
