import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

interface IInputProps {
  isUpperCase: boolean;
}

export default createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
	}

	body {
    -webkit-font-smoothing: antialiased;
	}

	button {
    cursor: pointer;
	}
`;

export const StyledInput = styled.input`
  font-size: 15px !important;
  border: 1px solid ${colors.grayLight};
  border-radius: 4px;
  padding: 12px 10px;
  font-weight: 400;
  margin: 0px;

  &:hover {
    border: 1px solid ${colors.primaryColor};
  }

  &:disabled {
    border: 1px solid ${colors.grayLight};
  }

  &:focus {
    border: 1px solid ${colors.primaryColor};
  }
`;

export const CheckBoxWrapper = styled.div`
  margin-top: 33px;
`;
