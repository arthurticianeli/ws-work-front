import { Grid } from "@mui/material";
import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";
import Button from "../Button";

export const StyledGrid = styled(Grid)`
  text-align: center;
`;

export const TitleModal = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  color: ${colors.primaryColor};
`;

export const SubTitleModal = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.primaryColor};
  font-family: Roboto;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: center;
  padding-bottom: 10px;
`;

export const StyledButton = styled(Button)<{ color: string }>`
  color: ${(props) => (props.color === "#FFFFFF" ? colors.primaryColor : null)};
  background: ${(props) =>
    props.color === "#FFFFFF"
      ? "transparent"
      : !props.disabled
      ? colors.primaryColor
      : colors.gray};
  border: ${(props) =>
    props.color === "#FFFFFF" ? `1px solid ${colors.primaryColor}` : null};

  ${(props) =>
    props.size === "small" &&
    css`
      width: 81px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      width: 120px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      width: 159px;
    `}

  ${(props) =>
    props.size === "full" &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
`;
