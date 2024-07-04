import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const StyledError = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: ${colors.red};
`;
