import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";
import dimensions from "../../../styles/dimensions";
import { ITextProps } from "./TextComponent.types";

export const Container = styled.p<ITextProps>`
  font-family: "Roboto";
  font-style: ${({ fontStyle }) => fontStyle ?? "normal"};
  font-size: ${({ size }) => (size ? size : dimensions.fontSize.medium)}px;
  font-weight: ${({ weight }) => weight ?? "normal"};
  color: ${({ color }) => color ?? colors.primaryColor};
  ${(props) =>
    props.maxWidth
      ? css`
          max-width: ${props.maxWidth};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : ""}
`;
