import { DefaultEditPage } from "common/components/DefaultEditPage";
import { IModelDtoRequest } from "domain/dtos/IModelDtoRequest";
import { IModelDtoResponse } from "domain/dtos/IModelDtoResponse";

import { removeMoedaSpecialChars } from "common/components/ControlledInputNumberMask/InputMaskUtils";
import { DeleteModelById } from "domain/usecases/modelo/DeleteModelById";
import { GetModelById } from "domain/usecases/modelo/GetModelById";
import { UpdateModel } from "domain/usecases/modelo/UpdateModelCar";
import { ModelRepository } from "infra/ModelRepository";
import ModelForm from "../ModeloForm";
import { ModeloFormValidator } from "../ModeloForm/ModeloFormValidator";

export const EditModelo = () => {
  const modelRepository = new ModelRepository();
  const getModelById = new GetModelById(modelRepository);
  const updateModel = new UpdateModel(modelRepository);
  const deleteModelById = new DeleteModelById(modelRepository);

  return (
    <DefaultEditPage<IModelDtoRequest, IModelDtoResponse, IModelDtoRequest>
      title="Modelo de veículo"
      successMessage="Modelo de veículo salvo com sucesso"
      successMessageDelete="Modelo de veículo deletado com sucesso"
      getOneUseCase={getModelById}
      editUseCase={updateModel}
      deleteUseCase={deleteModelById}
      formDataToDeleteParams={(data) => data.id}
      goBackRoute="/Models"
      form={({ control }) => <ModelForm control={control} />}
      formValidator={ModeloFormValidator}
      formDataToSaveParams={(data) => ({
        ...data,
        valorFipe: +removeMoedaSpecialChars(data.valorFipe.toString()),
      })}
    />
  );
};
