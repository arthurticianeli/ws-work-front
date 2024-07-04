import { Grid } from "@mui/material";
import ControlledInput from "common/components/ControlledInput";
import { InnerFormProps } from "common/components/types";
import { IModelsPaginadosFilterRequest } from "domain/dtos/IModelsPaginadosFilterRequest";
import React from "react";

type IFiltroGerenciadoraRiscoFieldsProps =
  InnerFormProps<IModelsPaginadosFilterRequest>;

export const FilterModelo: React.FC<IFiltroGerenciadoraRiscoFieldsProps> = ({
  control,
}) => {
  return (
    <Grid item xs={3}>
      <ControlledInput name="nomeModelo" label="Marca" control={control} />
    </Grid>
  );
};
