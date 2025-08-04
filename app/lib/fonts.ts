import NextFont from 'next/font/local';

// Candara Font
const candara = NextFont({
  src: [
    {
      path: '../../public/fonts/CANDARA.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CANDARAB.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-candara',
});

// Euphorigenic Font
const euphorigenic = NextFont({
  src: [
    {
      path: '../../public/fonts/euphorigenic.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/euphorigenic.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-euphorigenic',
});

// Quicksand Font
const quicksand = NextFont({
  src: [
    {
      path: '../../public/fonts/Quicksand-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Quicksand-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Quicksand-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Quicksand-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-quicksand',
});

// Poppins Font
const poppins = NextFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
});

// Comfortaa Font
const comfortaa = NextFont({
  src: [
    {
      path: '../../public/fonts/Comfortaa-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-comfortaa',
});

// Nunito Sans Font
const nunitoSans = NextFont({
  src: [
    {
      path: '../../public/fonts/NunitoSans-VariableFont.woff2',
      weight: '400 900', // Variable font weight range
      style: 'normal',
    },
  ],
  variable: '--font-nunito-sans',
});

export { candara, euphorigenic, quicksand, poppins, comfortaa, nunitoSans };