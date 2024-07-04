import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IModelDtoResponse } from "../../dtos/IModelDtoResponse";
import { IModelRepository } from "../../repositories/IModelRepository";

export class GetModelById implements IBaseUseCase<number, IModelDtoResponse> {
  constructor(private readonly repository: IModelRepository) {}

  execute(id: number): Promise<IModelDtoResponse> {
    return this.repository.getModelById(id);
  }
}
