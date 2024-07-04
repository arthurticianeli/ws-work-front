import { AxiosResponse } from "axios";
import { ICarDtoResponse } from "domain/dtos/ICarDtoResponse";
import { ICarBrandDtoResponse } from "../domain/dtos/ICarBrandDtoResponse";
import { ICarDtoRequest } from "../domain/dtos/ICarDtoRequest";
import { ICarsPaginadosFilterRequest } from "../domain/dtos/ICarsPaginadosFilterRequest";
import { ICarRepository } from "../domain/repositories/ICarRepository";

import { ServiceConfig } from "services/ServiceConfig";
import { PaginationResponse } from "../utils/PaginationResponse";

const http = new ServiceConfig();
export class CarRepository implements ICarRepository {
  async getCarById(id: number): Promise<ICarDtoResponse> {
    const response: AxiosResponse<ICarDtoResponse> = await http.get(
      `/car/${id}`
    );
    return response.data;
  }
  async postCar(Car: ICarDtoRequest): Promise<void> {
    await http.post("/car", Car);
  }

  async putCar(Car: ICarDtoRequest): Promise<void> {
    await http.put("/car", Car);
  }

  async deleteCarById(id: number): Promise<void> {
    await http.delete(`/car/${id}`);
  }

  async findPaginado(
    params: ICarsPaginadosFilterRequest
  ): Promise<PaginationResponse<ICarBrandDtoResponse>> {
    const response: AxiosResponse<PaginationResponse<ICarBrandDtoResponse>> =
      await http.get("/car/listar", {
        params,
      });
    return response.data;
  }
}
