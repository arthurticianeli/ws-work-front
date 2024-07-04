import { NumericFormat } from "react-number-format";
import styled from "styled-components";
import { colors } from "styles/colors";

export interface IInputProps {
  styledsuffix?: string;
}

export const StyledInputNumeric = styled(NumericFormat)<IInputProps>`
  font-size: 15px !important;
  border: 1px solid ${colors.grayLight};
  border-radius: 4px;
  padding: 12px 10px;
  font-weight: 400;
  margin: 0px;

  &:hover {
    border: 1px solid;
  }

  &:disabled {
    border: 1px solid ${colors.grayLight};
  }

  &:focus {
    border: 1px solid;
    boder-color: ${colors.primaryColor};
  }
`;
