import {
  assignVars,
  createThemeContract,
  createVar,
  style,
  styleVariants
} from "@vanilla-extract/css";
import { vars } from "../vars.css";
import { toneContract } from "../Text/Text.css";

const defaultTextTones = createThemeContract(toneContract);

/*
Background colours are adaptive to their contextual application.
e.g. `surface` will be dark on dark backgrounds, light on light backgrounds.
*/
const adaptiveBackgrounds = createThemeContract({
  body: "",
  surface: "",
  positiveLight: ""
});

/*
Sets of foreground overrides for a given background context.
*/
const adaptiveForegrounds = {
  neutral: assignVars(toneContract, {
    neutral: vars.color.foreground.neutralInverted,
    positive: defaultTextTones.positive,
    link: vars.color.foreground.linkLight
  }),
  positive: {
    ...assignVars(toneContract, {
      neutral: vars.color.foreground.neutralInverted,
      positive: toneContract.neutral,
      link: toneContract.neutral
    }),
    [adaptiveBackgrounds.surface]: vars.color.background.surface
  },
  positiveLight: assignVars(toneContract, {
    neutral: defaultTextTones.positive,
    positive: toneContract.neutral,
    link: toneContract.neutral
  }),
  customLight: assignVars(toneContract, {
    neutral: vars.color.foreground.neutral,
    positive: vars.color.foreground.positive,
    link: toneContract.neutral
  }),
  customDark: assignVars(toneContract, {
    neutral: vars.color.foreground.neutralInverted,
    positive: vars.color.foreground.positiveLight,
    link: toneContract.neutral
  })
} as const;

/*
Removing dark variants of adaptive backgrounds from Box api.
These values are only available contextually.
*/
const { bodyDark, surfaceDark, ...backgrounds } = vars.color.background;

/*
Box `background` classes, including customDark/customLight support.
Maps the background atom as well as any possible adapative foreground
overrides that may be defined.
*/
export const background = {
  ...styleVariants({ ...backgrounds }, (value, key: string) => ({
    vars:
      adaptiveForegrounds[key] || assignVars(toneContract, defaultTextTones),
    background: adaptiveBackgrounds[key] || value
  })),
  customDark: style({ vars: adaptiveForegrounds.customDark }),
  customLight: style({ vars: adaptiveForegrounds.customLight })
};

/*
Default top level class, basically your initial colour mode choice
*/
export const defaultLight = style([
  {
    vars: {
      ...assignVars(defaultTextTones, {
        neutral: vars.color.foreground.neutral,
        positive: vars.color.foreground.positive,
        link: vars.color.foreground.link
      }),
      ...assignVars(adaptiveBackgrounds, {
        body: vars.color.background.body,
        surface: vars.color.background.surface,
        positiveLight: vars.color.background.positiveLight
      })
    }
  },
  background.body
]);

export const defaultDark = style([
  {
    vars: {
      ...assignVars(defaultTextTones, {
        neutral: vars.color.foreground.neutralInverted,
        positive: vars.color.foreground.positiveLight,
        link: vars.color.foreground.linkLight
      }),
      ...assignVars(adaptiveBackgrounds, {
        body: vars.color.background.bodyDark,
        surface: vars.color.background.surfaceDark,
        positiveLight: vars.color.background.neutral
      })
    }
  },
  background.body
]);
