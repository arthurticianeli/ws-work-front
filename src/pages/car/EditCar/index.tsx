import { DefaultEditPage } from "common/components/DefaultEditPage";
import { ICarDtoRequest } from "domain/dtos/ICarDtoRequest";
import { ICarDtoResponse } from "domain/dtos/ICarDtoResponse";
import { DeleteCarById } from "domain/usecases/car/DeleteCarById";
import { GetCarById } from "domain/usecases/car/GetCarById";
import { UpdateCar } from "domain/usecases/car/UpdateCar";
import { CarRepository } from "infra/CarRepository";
import CarForm from "../CarForm";
import { CarFormValidator } from "../CarForm/CarFormValidator";

export const EditCar = () => {
  const carRepository = new CarRepository();
  const getCarById = new GetCarById(carRepository);
  const updateCar = new UpdateCar(carRepository);
  const deleteCarById = new DeleteCarById(carRepository);

  return (
    <DefaultEditPage<ICarDtoRequest, ICarDtoResponse, ICarDtoRequest>
      title="Veículo"
      successMessage="Veículo salvo com sucesso"
      successMessageDelete="Veículo deletado com sucesso"
      getOneUseCase={getCarById}
      editUseCase={updateCar}
      deleteUseCase={deleteCarById}
      formDataToDeleteParams={(data) => data.id}
      goBackRoute="/cars"
      form={({ control }) => <CarForm control={control} />}
      formValidator={CarFormValidator}
    />
  );
};
