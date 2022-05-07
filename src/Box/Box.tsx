import React, { AllHTMLAttributes, ReactNode } from "react";
import { sprinkles, Sprinkles } from "../sprinkles.css";
import * as resetStyles from "../reset.css";
import * as styles from "./Backgrounds.css";

interface Props
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      "width" | "height" | "className"
    >,
    Omit<Sprinkles, "background"> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  background?: keyof typeof styles.background;
}

export const Box = ({
  as = "div",
  className,
  children,
  background,
  style,
  ...props
}: Props) => {
  const sprinklesClasses = sprinkles(props);

  return React.createElement(as, {
    className: [
      resetStyles.base,
      resetStyles.element[as],
      className,
      sprinklesClasses,
      background ? styles.background[background] : ""
    ].join(" "),
    style,
    children
  });
};
