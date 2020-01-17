import React, { useContext } from 'react';

export const breakpoints = {
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1600,
};

const colorPalette = {
  black: '#000',
  white: '#ffffff',
  violetElectric: '#6432FA',
  grayAlto: '#dedede',
  grayMineShaft: '#3C3C3C',
  grayOuterSpace: '#35383b',
  grayOslo: '#828588',
  gainsboro: '#D8D8D8',
  grayRollingStone: '#808182',
  grayBoulder: '#7C7C7C',
  grayMercury: '#e2e2e2',
  graySilverChalice: '#a0a0a0',
  grayWildSand: '#F4F4F4',
  grayGallery: '#F0F0F0',
  red: '#FF0000',
  redPersian: '#c83232',
  greenEucalyptus: '#289646',
  purpleHan: '#6432FA',
};

const light = {
  breakpoints: Object.values(breakpoints)
    .slice(1)
    .map(b => `${b}px`),
  colorPalette,

  negativeColor: colorPalette.redPersian,
  neutralColor: colorPalette.grayWildSand,
  positiveColor: colorPalette.greenEucalyptus,
  primaryColor: colorPalette.violetElectric,
  secondaryColor: colorPalette.grayBoulder,
  boxShadowColor: colorPalette.graySilverChalice,
};

const dark = {
  ...light,

  negativeColor: colorPalette.red,
  positiveColor: colorPalette.greenEucalyptus,
  primaryColor: colorPalette.black,
  secondaryColor: colorPalette.white,
};

export { light, dark };

export const ThemeContext = React.createContext(light);

export const useTheme = () => useContext(ThemeContext);
