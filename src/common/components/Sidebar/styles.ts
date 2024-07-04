import styled, { css } from "styled-components";
import { colors } from "styles/colors";

interface IMenuItemProps {
  onClick(): void;
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 300px;
  height: 100%;
  background-color: ${colors.white};
  z-index: 98;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${colors.primaryColor};
  }
`;

export const Menu = styled.div`
  padding-top: 5px;
  height: auto;
  width: 100%;
  background-color: ${colors.white};
`;

export const MenuItem = styled.div<IMenuItemProps>`
  display: flex;
  height: 37px;
  width: 100%;
  font-weight: bold;
  color: ${colors.blue};
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  &:hover {
    color: ${colors.primaryColor};
    background-color: ${colors.secondaryColor};
  }

  svg {
    color: ${(props) => (props.selected ? colors.primaryColor : colors.blue)};
    &:hover {
      color: ${colors.white};
    }
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${colors.primaryColor};
      background-color: ${colors.secondaryColor};
    `}
`;

export const MenuTitle = styled.span<{ fontSize?: number }>`
  font-family: "Roboto";
  font-size: ${(props) => (!props.fontSize ? "14" : props.fontSize)}px;
  font-weight: 700px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 20px;
`;

export const MenuIcon = styled.div`
  margin-right: 10px;
  font-size: 10px;
`;
