import { removeMoedaSpecialChars } from "common/components/ControlledInputNumberMask/InputMaskUtils";
import { DefaultCreatePage } from "common/components/DefaultCreatePage";
import { IModelDtoRequest } from "domain/dtos/IModelDtoRequest";
import { PostModel } from "domain/usecases/modelo/PostModelCar";
import { ModelRepository } from "infra/ModelRepository";
import ModeloForm from "../ModeloForm";
import { ModeloFormValidator } from "../ModeloForm/ModeloFormValidator";

export const CreateModelo = () => {
  const modeloRepository = new ModelRepository();
  const postModelo = new PostModel(modeloRepository);

  return (
    <DefaultCreatePage<IModelDtoRequest, IModelDtoRequest>
      title="Modelo de veículo"
      successMessage="Modelo de veículo salvo com sucesso"
      createUseCase={postModelo}
      goBackRoute="/models"
      form={({ control }) => <ModeloForm control={control} />}
      formValidator={ModeloFormValidator}
      formDataToSaveParams={(data) => ({
        ...data,
        valorFipe: +removeMoedaSpecialChars(data.valorFipe.toString()),
      })}
    />
  );
};
