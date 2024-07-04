import { Grid } from "@mui/material";
import { Fragment, useState } from "react";
import { MdCheck } from "react-icons/md";

import Button from "../Button";

import { colors } from "../../../styles/colors";
import Modal from "../Modal";
import { IConfirmButtonProps } from "./ConfirmButtonComponent.types";
import { StyledButton, StyledGrid, SubTitleModal, TitleModal } from "./styles";

const confirmStyleProps = {
  borderSize: 1,
  transparent: true,
  fontColor: colors.primaryColor,
};

export const ConfirmButton: React.FC<IConfirmButtonProps> = ({
  buttonColor,
  buttonSize,
  buttonName,
  buttonDisabled,
  fontButtonColor,
  title,
  subTitle,
  modalSize = "extraSmall",
  onActionConfirm,
  focusOnConfirm = true,
  cancelButtonText,
  confirmButtonText,
  children,
  ...rest
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <StyledButton
        color={buttonColor}
        size={buttonSize}
        name={buttonName}
        fontColor={fontButtonColor}
        onClick={() => setOpenModal(true)}
        disabled={buttonDisabled}
        {...rest}
      >
        {children}
      </StyledButton>
      <Modal
        openModal={openModal}
        size={modalSize}
        onCloseModal={handleCloseModal}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <StyledGrid item xs={12}>
            <TitleModal>{title}</TitleModal>
            <SubTitleModal>{subTitle}</SubTitleModal>
          </StyledGrid>
          <Grid item>
            <Button
              {...(focusOnConfirm
                ? confirmStyleProps
                : { color: colors.primaryColor })}
              onClick={() => {
                handleCloseModal();
              }}
            >
              {cancelButtonText || "Cancelar"}
            </Button>
          </Grid>
          <Grid item>
            <Button
              {...(focusOnConfirm
                ? { color: colors.primaryColor }
                : confirmStyleProps)}
              onClick={() => {
                onActionConfirm();
                handleCloseModal();
              }}
            >
              <MdCheck /> {confirmButtonText || "Sim"}
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </Fragment>
  );
};
