import styled, { css, keyframes } from "styled-components";
import { modalSizes } from ".";
import { colors } from "../../../styles/colors";
import Button from "../Button";

interface IBackgroundProps {
  openModal: boolean;
}

interface IContentContainerProps {
  $size: modalSizes;
}

const apperFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100px)
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Background = styled.div<IBackgroundProps>`
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow-y: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  ${(props) =>
    props.openModal &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const StyledModal = styled.div<IContentContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  max-height: 90vh;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 4px;
  background-color: ${colors.white};
  animation: ${apperFromLeft} 0.3s;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  ${(props) =>
    props.$size === "extraSmall" &&
    css`
      /* width: 563px; */
      width: 40%;
    `}
  ${(props) =>
    props.$size === "small" &&
    css`
      /* width: 563px; */
      width: 60%;
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      /* width: 563px; */
      width: 70%;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      /* width: 859px; */
      width: 80%;
    `}
`;

export const HeaderBar = styled.div`
  width: 100%;
  padding: 0 80px;
  padding-top: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 50px 80px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 15px;
  width: 15px;

  & svg {
    padding: 0;
    margin: 0;
  }
`;
