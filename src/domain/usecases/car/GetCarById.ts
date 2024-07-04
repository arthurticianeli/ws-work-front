import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { ICarDtoResponse } from "../../dtos/ICarDtoResponse";
import { ICarRepository } from "../../repositories/ICarRepository";

export class GetCarById implements IBaseUseCase<number, ICarDtoResponse> {
  constructor(private readonly repository: ICarRepository) {}

  execute(id: number): Promise<ICarDtoResponse> {
    return this.repository.getCarById(id);
  }
}
