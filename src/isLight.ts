import { parseToRgb } from "polished";

const calculateYiq = (color: string) => {
  // Convert RGB to YIQ to better take into account the
  // luminance of the separate color channels:
  //
  // Further reading:
  //   - YIQ:
  //     https://en.wikipedia.org/wiki/YIQ
  //   - Calculating contrast:
  //     https://24ways.org/2010/calculating-color-contrast/

  const { red, green, blue } = parseToRgb(color);

  return (red * 299 + green * 587 + blue * 114) / 1000;
};

export const isLight = (
  inputColor: string,
  foregroundColor: string = "#000"
) => {
  const foregroundYiq = calculateYiq(foregroundColor);
  const yiq = calculateYiq(inputColor);
  const midpoint = 256 / 2;
  const foregroundOffset = foregroundYiq / 2;

  // Colour is considered `light` if greater than the midpoint:
  // eg. 256 / 2 = 128.
  // We include a foreground offset to take into account
  // lighter text shades than pure black
  return yiq >= midpoint + foregroundOffset;
};
