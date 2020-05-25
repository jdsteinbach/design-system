import { storiesOf } from '@storybook/vue';

import '../icons';

const iconValues = [];

const requireComponent = require.context(
  '../icons',
  true,
  /[-\w]+\.js/
);

requireComponent.keys().forEach(fileName => {
  if (fileName.match('index') !== null) {return;}

  const iconName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  iconValues.push(iconName);
});

const icons = storiesOf('1 Tokens|Icons', module);

icons.add(
  'Icons',
  () => ({
    data() {
      return {
        icons: iconValues,
        styles: {
          iconRow: {
            margin: 'var(--spacing)',
            display: 'grid',
            gridTemplateColumns: '32px 1fr auto',
            gap: 'var(--spacing)',
            alignItems: 'center'
          },
          iconRowName: {
            textTransform: 'capitalize'
          }
        }
      };
    },
    template: `<section>
      <div v-for="icon in icons" :key="icon" :style="styles.iconRow">
        <span>
          <svgicon
            :name="icon"
            width="24"
            height="24"
            :style="styles.icon"
            original
          />
        </span>
        <ui-text size="subheading" :style="styles.iconRowName">
          {{ niceName(icon) }}
        </ui-text>
        <ui-text>
          <code>{{ icon }}</code>
        </ui-text>
      </div>
    </section>`,
    methods: {
      niceName(name) {
        let rename = name.split('-').join(' ');

        return rename;
      }
    }
  }),
  {
    info: {
      source: false,
      summary: `## Icons

      These values are accepted by [\`svgicon\`](https://mmf-fe.github.io/vue-svgicon/v3/).

      Example:

      \`\`\`js
      import '@/icons/close-x';
      \`\`\`
      \`\`\`html
      <svgicon name="close-x" />
      \`\`\``
    }
  }
);
