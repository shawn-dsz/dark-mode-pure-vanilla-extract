import mapValues from "lodash.mapvalues";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { createVar } from "@vanilla-extract/css";
import { vars } from "./vars.css";

const borderWidth = createVar();
console.log(
  mapValues(vars.border.color, (value, name) => ({
    [name]: {
      vars: { [borderWidth]: "1px" },
      border: `${borderWidth} solid ${value}`
    }
  }))
);

const properties = defineProperties({
  properties: {
    display: ["none", "block", "flex"],
    flexDirection: ["row", "column"],
    alignItems: ["center"],
    justifyContent: ["center"],
    gap: vars.space,
    padding: vars.space,
    width: ["100vw"],
    height: ["100vh"],
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    border: mapValues(vars.border.color, (value) => ({
      vars: { [borderWidth]: "1px" },
      border: `${borderWidth} solid ${value}`
    })),
    borderWidth: mapValues(vars.border.width, (value) => ({
      vars: { [borderWidth]: value }
    })),
    borderRadius: vars.border.radius,
    textAlign: ["center"]
  }
});

export const sprinkles = createSprinkles(properties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
