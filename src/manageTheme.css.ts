import { createTheme } from '@vanilla-extract/css';
import { vars, tokens, createScale } from './vars.css';

const spaceScale = createScale(1.4, 6);

const background = {
  body: '#f6f8fa',
  bodyDark: '#0f131b',
  surface: '#fff',
  surfaceDark: '#1c2230',
  neutral: '#2d3648',
  positive: '#771355',
  positiveLight: '#f7e1f5',
} as const;

const foreground = {
  neutral: '#2d3648',
  neutralInverted: '#fff',
  link: '#499ee9',
  linkLight: '#68aeea',
  positive: '#94177a',
  positiveLight: '#88dec5',
};
export const manageTheme = createTheme(vars, {
  ...tokens,
  border: {
    ...tokens.border,
    width: {
      small: '3px',
      large: '6px',
    },
    radius: {
      small: '6px',
      large: '12px',
    },
  },
  color: {
    background,
    foreground,
  },
  space: {
    none: '0',
    xsmall: spaceScale(1),
    small: spaceScale(2),
    medium: spaceScale(4),
    large: spaceScale(6),
  },
  fontFamily: {
    body: "'Roboto', 'Helvetica Neue', Helvetica",
  },
});
