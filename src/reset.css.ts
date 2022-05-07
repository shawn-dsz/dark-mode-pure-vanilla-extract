import { style } from "@vanilla-extract/css";

export const base = style({
  all: "unset",
  boxSizing: "border-box"
});

const block = style({ display: "block" });

export const element = {
  div: block
};
