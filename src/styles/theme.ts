import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fonts from './fonts';
import space from './space';
import breakpoints from './breakpoints';
import sizes from './sizes';
import zindexes from './zindexes';
import global from './global';
import radii from './radii';

const customTheme = extendTheme({
  config: {
    cssVarPrefix: 'ggh',
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  ...global,
  ...colors,
  ...fonts,
  ...space,
  ...breakpoints,
  ...sizes,
  ...radii,
  ...zindexes,
});

export default {
  ...customTheme,
};
