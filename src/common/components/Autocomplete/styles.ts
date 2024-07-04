import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";
import dimensions from "styles/dimensions";

const { componentHeight } = dimensions;

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiInputBase-root.MuiAutocomplete-inputRoot {
    min-height: ${componentHeight.large}px;
  }
  .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    padding: 0;
  }
  .MuiInputBase-input.Mui-disabled {
    background-color: #fafafa;
    color: #545454;
  }
  .MuiInputBase-root.Mui-disabled {
    background-color: #fafafa;
    color: #545454;
  }
`;
export const StyledTextField = styled(TextField)``;
