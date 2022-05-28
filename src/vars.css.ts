import { createThemeContract } from '@vanilla-extract/css';
import { modularScale } from 'polished';
import { isLight } from './isLight';
import mapValues from 'lodash.mapvalues';

export const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const fontSizeScale = createScale(1.3, 16);

const background = {
  body: '#f6f8fa',
  bodyDark: '#0f131b',
  surface: '#fff',
  surfaceDark: '#1c2230',
  neutral: '#2d3648',
  positive: '#13774f',
  positiveLight: '#e1f7f1',
} as const;

const foreground = {
  neutral: '#2d3648',
  neutralInverted: '#fff',
  link: '#4964e9',
  linkLight: '#68aeea',
  positive: '#13774f',
  positiveLight: '#88dec5',
};

export const lightness = mapValues(background, (color, name) =>
  isLight(color, foreground.neutral) ? 'light' : 'dark',
);

export const tokens = {
  space: {
    none: '0',
    xsmall: spaceScale(1),
    small: spaceScale(2),
    medium: spaceScale(4),
    large: spaceScale(6),
  },
  border: {
    width: {
      small: '2px',
      large: '4px',
    },
    radius: {
      small: '4px',
      large: '8px',
    },
    color: {
      ...foreground,
      field: '#828ea4',
    },
  },
  color: {
    background,
    foreground,
  },
  fontFamily: {
    body: "'CircularXX', 'Helvetica Neue', Helvetica",
  },
  fontSize: {
    xsmall: '12px',
    small: fontSizeScale(0.5),
    medium: fontSizeScale(1.5),
    large: fontSizeScale(3),
  },
};

export const vars = createThemeContract(tokens);
