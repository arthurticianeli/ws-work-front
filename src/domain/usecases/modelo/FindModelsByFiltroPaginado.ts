import { IModelsPaginadosFilterRequest } from "domain/dtos/IModelsPaginadosFilterRequest";
import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { PaginationResponse } from "../../../utils/PaginationResponse";
import { IModelDtoResponse } from "../../dtos/IModelDtoResponse";
import { IModelRepository } from "../../repositories/IModelRepository";

export class FindModelsByFiltroPaginado
  implements
    IBaseUseCase<
      IModelsPaginadosFilterRequest,
      PaginationResponse<IModelDtoResponse>
    >
{
  constructor(private readonly repository: IModelRepository) {}

  execute(
    filter: IModelsPaginadosFilterRequest
  ): Promise<PaginationResponse<IModelDtoResponse>> {
    return this.repository.findPaginado(filter);
  }
}
