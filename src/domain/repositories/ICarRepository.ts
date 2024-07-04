import { PaginationResponse } from "../../utils/PaginationResponse";
import { ICarBrandDtoResponse } from "../dtos/ICarBrandDtoResponse";
import { ICarDtoRequest } from "../dtos/ICarDtoRequest";
import { ICarDtoResponse } from "../dtos/ICarDtoResponse";
import { ICarsPaginadosFilterRequest } from "../dtos/ICarsPaginadosFilterRequest";

export interface ICarRepository {
  getCarById: (id: number) => Promise<ICarDtoResponse>;
  postCar: (Car: ICarDtoRequest) => Promise<void>;
  putCar: (Car: ICarDtoRequest) => Promise<void>;
  deleteCarById: (id: number) => Promise<void>;
  findPaginado: (
    filter: ICarsPaginadosFilterRequest
  ) => Promise<PaginationResponse<ICarBrandDtoResponse>>;
}
