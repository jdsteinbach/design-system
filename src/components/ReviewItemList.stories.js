import { storiesOf } from '@storybook/vue';
import { withMaxWidth } from '../../.storybook/decorators/withMaxWidth';

import ReviewItem from './ReviewItem.vue';
import ReviewItemList from './ReviewItemList.vue';

const reviewItemList = storiesOf('5 - Misc|Review/Review Item List', module);

reviewItemList.addDecorator(withMaxWidth);

reviewItemList.add(
  'Review Item List',
  () => ({
    components: {
      ReviewItem,
      ReviewItemList
    },
    template: `<review-item-list>
      <review-item
        label="Permit Details"
        meta="Complete"
        status="complete"
      />
      <review-item
        label="Parcels"
        meta="2 added"
        status="in-progress"
      />
      <review-item
        label="Attachments"
        meta="3 added"
        status=""
      />
    </review-item-list>`
  }),
  {
    info: {
      summary: `The <code>review-item-list</code> is a wrapper for a series of <code>review-item</code> components.

      It has no logic. It adds a border-radius, and a 1px gap between items.`
    }
  }
);
