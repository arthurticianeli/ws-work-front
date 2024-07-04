import { IBrandRepository } from "domain/repositories/IBrandRepository";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { IBaseUseCase } from "../../../utils/IBaseUseCase";

export class GetAllBrands implements IBaseUseCase<void, CodigoDescricaoType[]> {
  constructor(private readonly repository: IBrandRepository) {}

  execute(): Promise<CodigoDescricaoType[]> {
    return this.repository.getAll();
  }
}
