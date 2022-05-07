import {
  createThemeContract,
  styleVariants,
  style
} from "@vanilla-extract/css";

export const toneContract = createThemeContract({
  neutral: "",
  positive: "",
  link: ""
});

export const tone = styleVariants(toneContract, (toneVar) => ({
  color: toneVar
}));

export const neutralLink = style({
  vars: {
    [toneContract.link]: "currentColor"
  }
});
