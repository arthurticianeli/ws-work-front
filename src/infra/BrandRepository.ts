import { AxiosResponse } from "axios";
import { IBrandsPaginadosFilterRequest } from "domain/dtos/IBrandsPaginadosFilterRequest";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { IBrandDtoRequest } from "../domain/dtos/IBrandDtoRequest";
import { IBrandDtoResponse } from "../domain/dtos/IBrandDtoResponse";
import { IBrandRepository } from "../domain/repositories/IBrandRepository";
import { ServiceConfig } from "../services/ServiceConfig";
import { PaginationResponse } from "../utils/PaginationResponse";

const http = new ServiceConfig();
export class BrandRepository implements IBrandRepository {
  async getBrandById(id: number): Promise<IBrandDtoResponse> {
    const response: AxiosResponse<IBrandDtoResponse> = await http.get(
      `/brand/${id}`
    );
    return response.data;
  }
  async postBrand(brand: IBrandDtoRequest): Promise<void> {
    await http.post("/brand", brand);
  }
  async putBrand(brand: IBrandDtoRequest): Promise<void> {
    await http.put("/brand", brand);
  }
  async deleteBrandById(id: number): Promise<void> {
    await http.delete(`/brand/${id}`);
  }
  async findPaginado(
    params: IBrandsPaginadosFilterRequest
  ): Promise<PaginationResponse<IBrandDtoResponse>> {
    const response: AxiosResponse<PaginationResponse<IBrandDtoResponse>> =
      await http.get("/brand/listar", {
        params,
      });
    return response.data;
  }
  getAll: () => Promise<CodigoDescricaoType[]> = async () => {
    const response: AxiosResponse<CodigoDescricaoType[]> = await http.get(
      "/brand"
    );
    return response.data;
  };
}
