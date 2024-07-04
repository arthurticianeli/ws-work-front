import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { ICarRepository } from "../../repositories/ICarRepository";

export class DeleteCarById implements IBaseUseCase<number, void> {
  constructor(private readonly repository: ICarRepository) {}

  execute(id: number): Promise<void> {
    return this.repository.deleteCarById(id);
  }
}
