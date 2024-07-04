import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { ILogoProps } from "./LogoComponent.types";

const wrapperModifiers = {
  small: () => css`
    width: 2.31rem;
  `,

  normal: () => css`
    width: 4.62rem;
  `,

  medium: () => css`
    width: 9.62rem;
  `,

  large: () => css`
    width: 18.5rem;
  `,

  largex1: () => css`
    width: 22rem;
  `,

  largex2: () => css`
    width: 28.5rem;
  `,
};

const cssLogo = ({ color, size }: ILogoProps) => css`
  color: ${colors[color]};

  ${!!size && wrapperModifiers[size]}
`;

export const Container = styled.div<ILogoProps>`
  ${({ color, size }) => cssLogo({ color, size })}
`;
