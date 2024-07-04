import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IBrandDtoRequest } from "../../dtos/IBrandDtoRequest";
import { IBrandRepository } from "../../repositories/IBrandRepository";

export class PostBrand implements IBaseUseCase<IBrandDtoRequest, void> {
  constructor(private readonly repository: IBrandRepository) {}

  execute(brand: IBrandDtoRequest): Promise<void> {
    return this.repository.postBrand(brand);
  }
}
