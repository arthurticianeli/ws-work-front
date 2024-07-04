import { DefaultCreatePage } from "common/components/DefaultCreatePage";
import { ICarDtoRequest } from "domain/dtos/ICarDtoRequest";
import { PostCar } from "domain/usecases/car/PostCar";
import { CarRepository } from "infra/CarRepository";
import CarForm from "../CarForm";
import { CarFormValidator } from "../CarForm/CarFormValidator";

export const CreateCar = () => {
  const carRepository = new CarRepository();
  const postCar = new PostCar(carRepository);

  return (
    <DefaultCreatePage<ICarDtoRequest, ICarDtoRequest>
      title="Veículo"
      successMessage="Veículo salvo com sucesso"
      createUseCase={postCar}
      goBackRoute="/cars"
      form={({ control }) => <CarForm control={control} />}
      formValidator={CarFormValidator}
    />
  );
};
