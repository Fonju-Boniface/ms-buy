// import { extendTheme } from '@chakra-ui/react';
// import { buildLegacyTheme } from 'sanity';

// export const colors = {
//   brand: {
//     primary: 'hsl(337,79%,60%)',
//     primaryLight: 'hsl(337,79%,70%)',
//     primaryDark: 'hsl(337,79%,50%)',
//   },
// };

// export const theme = extendTheme({ colors });

// const props = {
//   '--ms-white': '#fff',
//   '--ms-black': '#1a1a1a',
//   '--brand-primary': colors.brand.primary,
//   '--brand-primary-light': colors.brand.primaryLight,
//   '--brand-primary-dark': colors.brand.primaryDark,
//   '--ms-gray': '#666666',
// };

// export const msTheme = buildLegacyTheme({
//   '--black': props['--ms-black'],
//   '--gray': props['--ms-gray'],

//   '--focus-color': props['--brand-primary-dark'],

//   '--brand-primary': props['--brand-primary'],

//   '--component-bg': props['--ms-white'],
//   '--component-text-color': props['--ms-black'],

//   '--default-button-color': props['--ms-gray'],
//   '--default-button-primary-color': props['--brand-primary'],

//   '--state-info-color': props['--brand-primary-light'],
// });
import { extendTheme } from '@chakra-ui/react';
import { buildLegacyTheme } from 'sanity';

export const colors = {
  brand: {
    primary: 'hsl(337,79%,60%)',
    primaryLight: 'hsl(337,79%,70%)',
    primaryDark: 'hsl(337,79%,50%)',
  },
  bg: {
    dark: '#1a1a1a',
    light: '#fff',
  },
  text: {
    dark: '#fff',
    light: '#1a1a1a',
  },
};

export const theme = extendTheme({ colors });

const props = {
  '--ms-white': colors.bg.light,
  '--ms-black': colors.bg.dark,
  '--ms-text-color': colors.text.dark,
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark,
  '--ms-gray': '#666666',
};

export const msTheme = buildLegacyTheme({
  '--black': props['--ms-black'],
  '--gray': props['--ms-gray'],

  '--focus-color': props['--brand-primary-dark'],

  '--brand-primary': props['--brand-primary'],

  '--component-bg': props['--ms-black'],
  '--component-text-color': props['--ms-text-color'],

  '--default-button-color': props['--ms-text-color'],
  '--default-button-primary-color': props['--brand-primary'],

  '--state-info-color': props['--brand-primary-light'],
});