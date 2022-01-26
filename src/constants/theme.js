import {extendTheme} from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    Nunito: {
      400: {
        normal: 'Nunito-Regular',
      },
      500: {
        normal: 'Nunito-SemiBold',
        italic: 'Nunito-SemiBoldItalic',
      },
      700: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic',
      },
      900: {
        normal: 'Nunito-Black',
        italic: 'Nunito-BlackItalic',
      },
    },
  },
  fonts: {
    Nunito: 'Nunito',
  },
  colors: {
    // Add new color
    primary: '#17082A',
    secondary: '#210F37',
    primaryBtn: '#6644B8',
    secondaryBtn: '#FF8FC6',
    iconColor: '#F79E44',
    textColor: '#BCB7C3',
    otherTextColor: '#ECBBDA',
    disableColor: '#444F61',
    rippleColor: '#36274B',
  },
});
