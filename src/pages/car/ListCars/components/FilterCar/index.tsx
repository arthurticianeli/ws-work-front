import { Grid } from "@mui/material";
import { ControlledAutocomplete } from "common/components/ControlledAutocomplete";
import { InnerFormProps } from "common/components/types";
import { GetAllBrands } from "domain/usecases/brand/GetAllBrands";
import { GetAllModels } from "domain/usecases/modelo/GetAllModels";
import { BrandRepository } from "infra/BrandRepository";
import { ModelRepository } from "infra/ModelRepository";
import React from "react";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { ICarsPaginadosFilterRequest } from "../../../../../domain/dtos/ICarsPaginadosFilterRequest";

type IFiltroCarFieldsProps = InnerFormProps<ICarsPaginadosFilterRequest>;

export const FilterCar: React.FC<IFiltroCarFieldsProps> = ({ control }) => {
  const modelRespository = new ModelRepository();
  const brandRespository = new BrandRepository();
  const getAllModels = new GetAllModels(modelRespository);
  const getAllBrands = new GetAllBrands(brandRespository);

  return (
    <>
      <Grid item xs={3}>
        <ControlledAutocomplete<
          ICarsPaginadosFilterRequest,
          CodigoDescricaoType[]
        >
          name="modelo"
          label="Modelo"
          control={control}
          usecasePromiseCallback={() => getAllModels.execute()}
        />
      </Grid>
      <Grid item xs={3}>
        <ControlledAutocomplete<
          ICarsPaginadosFilterRequest,
          CodigoDescricaoType[]
        >
          name="brand"
          label="Marca"
          control={control}
          usecasePromiseCallback={() => getAllBrands.execute()}
        />
      </Grid>
    </>
  );
};
