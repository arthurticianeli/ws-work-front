import { Grid } from "@mui/material";
import ControlledInput from "common/components/ControlledInput";
import { InnerFormProps } from "common/components/types";
import { IBrandsPaginadosFilterRequest } from "domain/dtos/IBrandsPaginadosFilterRequest";
import React from "react";

type IFiltroGerenciadoraRiscoFieldsProps =
  InnerFormProps<IBrandsPaginadosFilterRequest>;

export const FilterBrand: React.FC<IFiltroGerenciadoraRiscoFieldsProps> = ({
  control,
}) => {
  return (
    <Grid item xs={3}>
      <ControlledInput name="nomeMarca" label="Marca" control={control} />
    </Grid>
  );
};
