import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";
import dimensions from "../../../styles/dimensions";
import { IStyledButtonProps } from "./ButtonComponent.types";

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${dimensions.componentHeight.large}px;

  background: ${(props) =>
    props.$transparent
      ? "transparent"
      : !props.disabled
      ? props.$color
      : colors.gray};
  color: ${(props) => (props.$fontColor ? props.$fontColor : colors.white)};
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.$size === "supersmall" &&
    css`
      width: 35px;
    `}

  ${(props) =>
    props.$size === "extrasmall" &&
    css`
      width: 50px;
    `}

  ${(props) =>
    props.$size === "small" &&
    css`
      width: 81px;
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      width: 120px;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      width: 159px;
    `}

  ${(props) =>
    props.$size === "auto" &&
    css`
      width: auto;
    `}

  ${(props) =>
    props.$size === "full" &&
    css`
      width: 100%;
    `}


  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};

  border-radius: 4px;
  border: ${(props) => (props.$borderSize ? props.$borderSize : 0)}px solid
    ${colors.green};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 5px;
  }
`;
