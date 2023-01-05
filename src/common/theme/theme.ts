import { extendTheme } from '@chakra-ui/react';

import { ModalTheme, ButtonTheme, TableTheme, MenuTheme, BadgeTheme } from './components';
import { colors } from './colors';
import { radii } from './sizes';
import { fontSizes, fonts } from './typo';

export const theme = extendTheme({
  components: {
    Modal: ModalTheme,
    Button: ButtonTheme,
    Table: TableTheme,
    Menu: MenuTheme,
    Badge: BadgeTheme,
  },
  colors,
  fontSizes,
  fonts,
  radii,
});
