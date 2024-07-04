import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IModelRepository } from "../../repositories/IModelRepository";

export class GetAllModels implements IBaseUseCase<void, CodigoDescricaoType[]> {
  constructor(private readonly repository: IModelRepository) {}

  execute(): Promise<CodigoDescricaoType[]> {
    return this.repository.getAll();
  }
}
