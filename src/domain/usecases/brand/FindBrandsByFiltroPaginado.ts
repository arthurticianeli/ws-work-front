import { IBrandsPaginadosFilterRequest } from "domain/dtos/IBrandsPaginadosFilterRequest";
import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { PaginationResponse } from "../../../utils/PaginationResponse";
import { IBrandDtoResponse } from "../../dtos/IBrandDtoResponse";
import { IBrandRepository } from "../../repositories/IBrandRepository";

export class FindBrandsByFiltroPaginado
  implements
    IBaseUseCase<
      IBrandsPaginadosFilterRequest,
      PaginationResponse<IBrandDtoResponse>
    >
{
  constructor(private readonly repository: IBrandRepository) {}

  execute(
    filter: IBrandsPaginadosFilterRequest
  ): Promise<PaginationResponse<IBrandDtoResponse>> {
    return this.repository.findPaginado(filter);
  }
}
