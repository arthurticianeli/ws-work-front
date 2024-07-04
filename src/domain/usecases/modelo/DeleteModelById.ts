import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IModelRepository } from "../../repositories/IModelRepository";

export class DeleteModelById implements IBaseUseCase<number, void> {
  constructor(private readonly repository: IModelRepository) {}

  execute(id: number): Promise<void> {
    return this.repository.deleteModelById(id);
  }
}
