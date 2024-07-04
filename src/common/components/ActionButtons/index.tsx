import { Grid } from "@mui/material";
import { GridSize } from "@mui/system";
import { colors } from "../../../styles/colors";
import Button from "../Button";
import { IButtonProps } from "../Button/ButtonComponent.types";
import { ConfirmButton } from "../ConfirmButton";

type buttonFunc = () => void;

interface ICustomButton {
  text: string;
  action: buttonFunc;
  lg?: GridSize;
  xs?: GridSize;
  props?: IButtonProps;
}

interface Props {
  titleDelete?: string;
  subTitleDelete?: string;
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  handleFilter?: buttonFunc;
  handleCleanFilter?: buttonFunc;
  handleSave?: buttonFunc;
  handleEdit?: buttonFunc;
  handleCancel?: buttonFunc;
  handleDelete?: buttonFunc;
  handleContinue?: buttonFunc;
  handleAlter?: buttonFunc;
  showDeleteButton?: boolean;
  customButton?: ICustomButton;
  multipleCustomButtons?: ICustomButton[];
}

const ActionButtons = ({
  justifyContent = "flex-end",
  showDeleteButton = true,
  titleDelete,
  subTitleDelete,
  handleFilter,
  handleCleanFilter,
  handleSave,
  handleEdit,
  handleCancel,
  handleDelete,
  handleContinue,
  handleAlter,
  customButton,
  multipleCustomButtons,
}: Props) => {
  return (
    <Grid container item spacing={4} justifyContent={justifyContent}>
      {handleCleanFilter && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.grayLight}
            onClick={() => handleCleanFilter()}
          >
            Limpar filtros
          </Button>
        </Grid>
      )}
      {handleFilter && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.primaryColor}
            onClick={() => handleFilter()}
          >
            Buscar
          </Button>
        </Grid>
      )}
      {handleEdit && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.primaryColor}
            onClick={() => handleEdit()}
          >
            Editar
          </Button>
        </Grid>
      )}
      {handleCancel && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.grayLight}
            onClick={() => handleCancel()}
          >
            Cancelar
          </Button>
        </Grid>
      )}
      {handleDelete && showDeleteButton && (
        <Grid item xs={2}>
          <ConfirmButton
            buttonColor={colors.white}
            buttonName="Deletar"
            buttonSize="full"
            title={titleDelete || "Deseja realmente deletar?"}
            subTitle={
              subTitleDelete || "Ao deletar, isso se perderá permanentemente!"
            }
            onActionConfirm={handleDelete}
          >
            Deletar
          </ConfirmButton>
        </Grid>
      )}
      {handleContinue && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.primaryColor}
            onClick={() => handleContinue()}
          >
            Continuar
          </Button>
        </Grid>
      )}
      {handleAlter && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.primaryColor}
            onClick={() => handleAlter()}
          >
            Alterar
          </Button>
        </Grid>
      )}
      {customButton && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.primaryColor}
            onClick={() => customButton.action()}
          >
            {customButton.text}
          </Button>
        </Grid>
      )}
      {multipleCustomButtons?.map(({ action, text, lg, xs, props }, index) => (
        <Grid item lg={lg} xs={xs || 2} key={`${text}${index}`}>
          <Button
            size="full"
            color={colors.primaryColor}
            {...props}
            onClick={() => action?.()}
          >
            {text}
          </Button>
        </Grid>
      ))}
      {handleSave && (
        <Grid item xs={2}>
          <Button
            size="full"
            color={colors.primaryColor}
            onClick={() => handleSave()}
          >
            Salvar
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default ActionButtons;
