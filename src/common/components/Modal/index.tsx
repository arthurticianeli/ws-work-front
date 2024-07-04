import React from "react";
import { MdClose } from "react-icons/md";
import { colors } from "../../../styles/colors";
import Text from "../Text";
import {
  Background,
  CloseButton,
  Content,
  HeaderBar,
  StyledModal,
} from "./styles";

export type modalSizes = "extraSmall" | "small" | "medium" | "large";

interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  openModal: boolean;
  title?: string;
  "aria-label"?: string;
  showCloseButton?: boolean;
  size?: modalSizes;
  onCloseModal?(): void;
}

const Modal: React.FC<IModalProps> = ({
  id,
  title,
  openModal,
  onCloseModal,
  showCloseButton = true,
  size = "medium",
  children,
  ...props
}) => {
  return (
    <Background id={id} openModal={openModal} {...props}>
      <StyledModal $size={size}>
        {showCloseButton && (
          <CloseButton
            transparent={true}
            size="small"
            onClick={onCloseModal}
            data-testid="closeModal"
          >
            <MdClose color={colors.primaryColor} size={15} />
          </CloseButton>
        )}
        <HeaderBar>
          {title && (
            <Text color={colors.primaryColor} size={18} weight="700">
              {title}
            </Text>
          )}
        </HeaderBar>
        <Content>{children}</Content>
      </StyledModal>
    </Background>
  );
};

export default Modal;
