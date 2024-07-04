import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const LabelWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: -5px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 500;
  font-family: "Roboto";
`;

export const HelperMessage = styled.span`
  font-style: italic;
  font-size: 15px;
  font-weight: normal;
  margin-left: 2px;
  color: ${colors.red};
`;

export const LabelHelperMessageWrapper = styled.div``;

export const TooltipWrapper = styled.div`
  margin-top: 2px;
  margin-bottom: -2px;
`;
