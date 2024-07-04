import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { ICarDtoRequest } from "../../dtos/ICarDtoRequest";
import { ICarRepository } from "../../repositories/ICarRepository";

export class PostCar implements IBaseUseCase<ICarDtoRequest, void> {
  constructor(private readonly repository: ICarRepository) {}

  execute(car: ICarDtoRequest): Promise<void> {
    return this.repository.postCar(car);
  }
}
