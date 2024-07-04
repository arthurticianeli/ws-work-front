import { IBrandsPaginadosFilterRequest } from "domain/dtos/IBrandsPaginadosFilterRequest";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { PaginationResponse } from "../../utils/PaginationResponse";
import { IBrandDtoRequest } from "../dtos/IBrandDtoRequest";
import { IBrandDtoResponse } from "../dtos/IBrandDtoResponse";

export interface IBrandRepository {
  findPaginado: (
    filter: IBrandsPaginadosFilterRequest
  ) => Promise<PaginationResponse<IBrandDtoResponse>>;
  getBrandById: (id: number) => Promise<IBrandDtoResponse>;
  postBrand: (Brand: IBrandDtoRequest) => Promise<void>;
  putBrand: (Brand: IBrandDtoRequest) => Promise<void>;
  deleteBrandById: (id: number) => Promise<void>;
  getAll: () => Promise<CodigoDescricaoType[]>;
}
