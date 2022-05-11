import React, { ReactNode, SyntheticEvent } from "react";
import S from "./Button.styles";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  primaryCategory?: "filled" | "outlined" | "text" | "elevated" | "tonal";
  secondaryCategory?: "enabled" | "disabled";
  onClick?: (evt: SyntheticEvent) => void;
}

const Button = ({
  className,
  children,
  type = "button",
  primaryCategory = "filled",
  secondaryCategory = "enabled",
  onClick,
}: ButtonProps): JSX.Element => (
  <S.Button
    type={type}
    className={className}
    primaryCategory={primaryCategory}
    secondaryCategory={secondaryCategory}
    disabled={secondaryCategory === "disabled"}
    onClick={onClick}
  >
    {children}
  </S.Button>
);

export default Button;
