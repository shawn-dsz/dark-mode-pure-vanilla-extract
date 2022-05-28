import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../vars.css';
export const button = recipe({
  base: {
    borderRadius: 6,
  },

  variants: {
    color: {
      neutral: { background: vars.color.background.neutral },
      brand: { background: 'blueviolet' },
      accent: { background: 'slateblue' },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: 'neutral',
        size: 'large',
      },
      style: {
        background: 'ghostwhite',
      },
    },
  ],

  defaultVariants: {
    color: 'accent',
    size: 'medium',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
