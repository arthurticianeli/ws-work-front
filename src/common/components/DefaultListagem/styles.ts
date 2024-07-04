import styled from "styled-components";
import { colors } from "styles/colors";

export const FilterContainer = styled.div`
  width: 100%;
  border: 2px solid ${colors.primaryColor};
  padding: 20px;
  margin: 20px 0;
  position: relative;
  border-radius: 3px;
`;

export const FilterHeader = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  background-color: #fff;
  padding: 0 10px;
  color: ${colors.primaryColor};
  font-weight: bold;
  font-family: "Roboto";
`;
