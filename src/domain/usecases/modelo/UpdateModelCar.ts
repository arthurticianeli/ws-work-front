import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IModelDtoRequest } from "../../dtos/IModelDtoRequest";
import { IModelRepository } from "../../repositories/IModelRepository";

export class UpdateModel implements IBaseUseCase<IModelDtoRequest, void> {
  constructor(private readonly repository: IModelRepository) {}

  execute(model: IModelDtoRequest): Promise<void> {
    return this.repository.putModel(model);
  }
}
