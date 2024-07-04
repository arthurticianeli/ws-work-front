import styled from "styled-components";
import { colors } from "../../../styles/colors";
import Button from "../Button";

export const StyledButtonComeBack = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.primaryColor};
  border: 2px solid ${colors.primaryColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
