import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { IBrandDtoResponse } from "../../dtos/IBrandDtoResponse";
import { IBrandRepository } from "../../repositories/IBrandRepository";

export class GetBrandById implements IBaseUseCase<number, IBrandDtoResponse> {
  constructor(private readonly repository: IBrandRepository) {}

  execute(id: number): Promise<IBrandDtoResponse> {
    return this.repository.getBrandById(id);
  }
}
