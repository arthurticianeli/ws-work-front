import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IBrandRepository } from "../../repositories/IBrandRepository";

export class DeleteBrandById implements IBaseUseCase<number, void> {
  constructor(private readonly repository: IBrandRepository) {}

  execute(id: number): Promise<void> {
    return this.repository.deleteBrandById(id);
  }
}
