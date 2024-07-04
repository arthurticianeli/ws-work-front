import { Grid } from "@mui/material";
import { ControlledAutocomplete } from "common/components/ControlledAutocomplete";
import ControlledInput from "common/components/ControlledInput";
import { ControlledYearPicker } from "common/components/ControlledYearPicker";
import { ICarDtoRequest } from "domain/dtos/ICarDtoRequest";
import { GetAllModels } from "domain/usecases/modelo/GetAllModels";
import { ModelRepository } from "infra/ModelRepository";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";

const CarForm = ({ control }) => {
  const modelRespository = new ModelRepository();
  const getAllModels = new GetAllModels(modelRespository);

  return (
    <Grid container spacing={4} mb={3} alignItems="flex-start">
      <Grid item spacing={4} container md={6}>
        <Grid item md={6} xs={12}>
          <ControlledAutocomplete<ICarDtoRequest, CodigoDescricaoType[]>
            name="modeloId"
            label="Modelo"
            control={control}
            usecasePromiseCallback={() => getAllModels.execute()}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ControlledInput
            name="combustivel"
            label="Combustível"
            control={control}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ControlledInput
            name="numPortas"
            label="Número de portas"
            control={control}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ControlledInput name="cor" label="Cor" control={control} />
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <ControlledYearPicker name="ano" label="Ano" control={control} />
      </Grid>
    </Grid>
  );
};

export default CarForm;
