import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

const BACKGROUND_COLORS = {
  filled: {
    enabled: "rgba(103, 80, 164, 1)",
    hovered: "rgba(103, 80, 164, 0.92)",
    focusedOrPressed: "rgba(103, 80, 164, 0.88)",
    disabled: "rgba(31, 31, 31, 0.12)",
  },
};

const COLORS = {
  filled: {
    enabled: "rgba(255, 255, 255, 1)",
    hovered: "rgba(255, 255, 255, 1)",
    focusedOrPressed: "rgba(255, 255, 255, 1)",
    disabled: "rgba(28, 27, 31, 0.38)",
  },
};

const Button = styled.button<ButtonProps>`
  background: ${(props) =>
    BACKGROUND_COLORS[props.primaryCategory][props.secondaryCategory]};
  color: ${(props) => COLORS[props.primaryCategory][props.secondaryCategory]};
  border-radius: 100px;
  padding: 10px 24px;
  height: 40px;
  letter-spacing: 0.1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: 0.3s all;
  border: none;
  pointer-events: ${(props) =>
    props.secondaryCategory === "disabled" && "none"};
  user-select: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 1%,
      transparent 1%
    );
    opacity: 0;
    transition: none;
    will-change: background-size;
  }

  &:hover {
    background: ${(props) =>
      BACKGROUND_COLORS[props.primaryCategory]["hovered"]};
    color: ${(props) => COLORS[props.primaryCategory]["hovered"]};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }

  &:focus,
  &:active {
    background: ${(props) =>
      BACKGROUND_COLORS[props.primaryCategory]["focusedOrPressed"]};
    color: ${(props) => COLORS[props.primaryCategory]["focusedOrPressed"]};
    box-shadow: none;
  }

  &:focus {
    &::after {
      background-size: 15000%;
      opacity: 1;
      transition: 0.2s background-size linear;
    }
  }

  &:active {
    &::after {
      background-size: 5000%;
      opacity: 0;
      transition: none;
    }
  }
`;

export default {
  Button,
};
