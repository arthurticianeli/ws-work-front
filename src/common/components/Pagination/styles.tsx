import styled from "styled-components";

import { colors } from "../../../styles/colors";
import Button from "../Button";

interface IContainerPageProps {
  $active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: right;

  background: ${colors.white};
`;

export const ContainerPage = styled.div<IContainerPageProps>`
  width: 20px;
  height: 20px;

  background: white;

  margin: 0px 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${(props) =>
    props.$active ? `1px solid ${colors.primaryColor}` : "none"};
  border-radius: 3px;

  color: ${(props) => (props.$active ? colors.primaryColor : colors.black)};

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 12px;

  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  width: 24px;
  height: 24px;

  margin: 0px 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colors.graySoftLine};

  & svg {
    margin: 0;
  }
`;

export const StyledTotal = styled.p`
  font-size: 14px;
  margin-right: 15px;
`;
