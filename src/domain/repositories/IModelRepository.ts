import { IModelsPaginadosFilterRequest } from "domain/dtos/IModelsPaginadosFilterRequest";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { PaginationResponse } from "../../utils/PaginationResponse";
import { IModelDtoRequest } from "../dtos/IModelDtoRequest";
import { IModelDtoResponse } from "../dtos/IModelDtoResponse";

export interface IModelRepository {
  findPaginado: (
    filter: IModelsPaginadosFilterRequest
  ) => Promise<PaginationResponse<IModelDtoResponse>>;
  getModelById: (id: number) => Promise<IModelDtoResponse>;
  postModel: (Model: IModelDtoRequest) => Promise<void>;
  putModel: (Model: IModelDtoRequest) => Promise<void>;
  deleteModelById: (id: number) => Promise<void>;
  getAll: () => Promise<CodigoDescricaoType[]>;
}
