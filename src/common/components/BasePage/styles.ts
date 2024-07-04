import styled from "styled-components";
import { colors } from "styles/colors";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${colors.grayExtraLight};
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  background: ${colors.white};
`;
