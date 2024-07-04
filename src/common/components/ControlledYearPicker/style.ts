import { YearCalendar } from "@mui/x-date-pickers";
import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledYearPicker = styled(YearCalendar)`
  width: 100%;
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
