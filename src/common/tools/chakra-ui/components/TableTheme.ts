import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(['table', 'th', 'td', 'tr']);

export const TableTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    table: {
      bg: 'border.box',
      border: '2px solid transparent',
      borderRadius: '3xl',
      variant: 'unstyled',
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    th: {
      textTransform: 'capitalize',
      _first: {
        borderTopLeftRadius: '3xl',
      },
      _last: {
        borderTopRightRadius: '3xl',
      },
    },
    tr: {
      borderBottom: '1px solid',
      borderBottomColor: 'gray.100',
      borderStyle: 'solid',
    },
  },
  sizes: {
    sm: {
      tr: {
        borderBottom: '2px solid',
        borderBottomColor: 'gray.100',
      },
    },
    md: {
      td: {
        fontSize: 'md',
        py: '9',
        pl: '8',
      },
      th: {
        fontSize: 'md',
        py: '5',
        pl: '8',
      },
    },
  },
  variants: {
    primary: {
      th: {
        bg: 'gray.100',
        color: 'gray.600',
        fontWeight: 'medium',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});