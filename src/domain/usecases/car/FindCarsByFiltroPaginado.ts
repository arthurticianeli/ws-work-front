import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { PaginationResponse } from "../../../utils/PaginationResponse";
import { ICarBrandDtoResponse } from "../../dtos/ICarBrandDtoResponse";
import { ICarsPaginadosFilterRequest } from "../../dtos/ICarsPaginadosFilterRequest";
import { ICarRepository } from "../../repositories/ICarRepository";

export class FindCarsByNomeModeloAndMarcaPaginado
  implements
    IBaseUseCase<
      ICarsPaginadosFilterRequest,
      PaginationResponse<ICarBrandDtoResponse>
    >
{
  constructor(private readonly repository: ICarRepository) {}

  execute(
    filter: ICarsPaginadosFilterRequest
  ): Promise<PaginationResponse<ICarBrandDtoResponse>> {
    return this.repository.findPaginado(filter);
  }
}
