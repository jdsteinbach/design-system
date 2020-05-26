import { create } from '@storybook/theming/create';

import logo from '../assets/logo.svg';

export default create({
  base: 'light',

  colorSecondary: '#2196F3',

  appBg: '#ECEFF1',
  appBorderColor: '#B0BEC5',
  appBorderRadius: 8,

  barTextColor: '#455A64',
  barSelectedColor: '#1976D2',
  barBg: '#fff',

  fontBase: 'Roboto, Open Sans, sans-serif',

  brandTitle: 'James Steinbach: Design System',
  brandUrl: 'https://design-system.jamessteinbach.com',
  brandImage: logo
});
