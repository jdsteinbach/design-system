import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';

const ago = date => distanceInWordsToNow(date);

const dateTimeBullet = date => format(date, 'MMM D, YYYY • h:mm aa');

const prettyDate = date => format(date, 'MMMM D, YYYY');

const prettyDateShort = date => format(date, 'MMM D, YYYY');

export { ago, dateTimeBullet, prettyDate, prettyDateShort };
