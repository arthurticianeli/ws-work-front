import { Grid } from "@mui/material";
import { ControlledAutocomplete } from "common/components/ControlledAutocomplete";
import ControlledInput from "common/components/ControlledInput";
import { ControlledInputNumberMask } from "common/components/ControlledInputNumberMask";
import { IModelDtoRequest } from "domain/dtos/IModelDtoRequest";
import { GetAllBrands } from "domain/usecases/brand/GetAllBrands";
import { BrandRepository } from "infra/BrandRepository";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";

const ModeloForm = ({ control }) => {
  const brandRespository = new BrandRepository();
  const getAllBrands = new GetAllBrands(brandRespository);
  return (
    <Grid container spacing={4} mb={3} alignItems="flex-start">
      <Grid item xs={3} md={3}>
        <ControlledInput name="nome" label="Nome da Marca" control={control} />
      </Grid>
      <Grid item xs={3} md={3}>
        <ControlledAutocomplete<IModelDtoRequest, CodigoDescricaoType[]>
          name="marcaId"
          label="Marca"
          control={control}
          usecasePromiseCallback={() => getAllBrands.execute()}
        />
      </Grid>

      <Grid item xs={3} md={3}>
        <ControlledInputNumberMask
          control={control}
          decimalScale={2}
          prefix="R$"
          id="valorFipe"
          name="valorFipe"
          placeholder="Ex.: 0,25"
          maxLength={15}
          label="Valor Tabela FIPE"
        />
      </Grid>
    </Grid>
  );
};

export default ModeloForm;
