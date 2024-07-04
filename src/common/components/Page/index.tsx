import { Grid } from "@mui/material";
import React, { FunctionComponent, useCallback } from "react";
import { MdAdd, MdCheck, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../styles/colors";
import Button from "../Button";
import Text from "../Text";
import { IPageProps } from "./PageComponent.types";
import { StyledButtonComeBack } from "./styles";
interface IBasePageComponent {
  children?: React.ReactNode;
}

const CombinedPageComponent: FunctionComponent<
  IPageProps & IBasePageComponent
> = ({
  title,
  showHeaderActions,
  children,
  hideBack,
  actionEdit,
  actionSave,
  actionNew,
  handleEdit,
  handleNew,
  onSubmit,
  handleGoBack,
  actionItems,
}) => {
  const navigate = useNavigate();

  const defaultHandleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Grid container style={{ overflow: "auto" }}>
      {showHeaderActions && (
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          mx={10}
          my={3}
        >
          <Grid item>
            <Text size={16} color={colors.primaryColor} weight="bold">
              {title}
            </Text>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {!hideBack && (
                <Grid item>
                  <StyledButtonComeBack
                    name="Voltar"
                    onClick={handleGoBack || defaultHandleGoBack}
                  >
                    Voltar
                  </StyledButtonComeBack>
                </Grid>
              )}
              {actionEdit && (
                <Grid item>
                  <Button color={colors.primaryColor} onClick={handleEdit}>
                    <MdEdit /> Editar
                  </Button>
                </Grid>
              )}
              {actionSave && (
                <Grid item>
                  <Button
                    color={colors.primaryColor}
                    type="submit"
                    onClick={onSubmit}
                  >
                    <MdCheck /> Salvar
                  </Button>
                </Grid>
              )}
              {actionNew && (
                <Grid item>
                  <Button
                    color={colors.primaryColor}
                    type="submit"
                    onClick={handleNew}
                  >
                    <MdAdd /> Novo
                  </Button>
                </Grid>
              )}
              {actionItems}
            </Grid>
          </Grid>
          <Grid container item>
            {children}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CombinedPageComponent;
