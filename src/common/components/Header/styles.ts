import styled from "styled-components";

import { colors } from "styles/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 71px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryColor};
`;

export const LogoContainer = styled.div`
  display: flex;
  padding: 20px;
`;
