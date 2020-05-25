import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withMaxWidth } from '../../.storybook/decorators/withMaxWidth';

import ReviewItem from './ReviewItem.vue';

const reviewItem = storiesOf('5 - Misc|Review/Review Item', module);

reviewItem.addDecorator(withKnobs);
reviewItem.addDecorator(withMaxWidth);

reviewItem.add(
  'Review Item',
  () => ({
    components: { ReviewItem },
    template: `<review-item
      :label="reviewItemLabel"
      :meta="reviewItemMeta"
      :status="reviewItemStatus"
    />`,
    props: {
      reviewItemLabel: {
        default: text('Label', 'Account Created')
      },
      reviewItemMeta: {
        default: text('Meta', 'Thanks, friend!')
      },
      reviewItemStatus: {
        default: select('Status', ['in-progress', 'incomplete', ''], 'in-progress')
      }
    }
  }),
  {
    info: {
      summary: `The <code>review-item</code> shows application steps in a <code>review-item-list</code> wrapper.

      It shows a label and a meta detail. Its status determines its icon.`
    }
  }
);
