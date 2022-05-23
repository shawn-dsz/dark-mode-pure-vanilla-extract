import { createTheme } from '@vanilla-extract/css';
import { vars, tokens } from './vars.css';


export const guestTheme = createTheme(vars, {
  ...tokens,
});
