import { AxiosResponse } from "axios";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { IModelDtoRequest } from "../domain/dtos/IModelDtoRequest";
import { IModelDtoResponse } from "../domain/dtos/IModelDtoResponse";
import { IModelRepository } from "../domain/repositories/IModelRepository";

import { IModelsPaginadosFilterRequest } from "domain/dtos/IModelsPaginadosFilterRequest";
import { ServiceConfig } from "services/ServiceConfig";
import { PaginationResponse } from "../utils/PaginationResponse";

const http = new ServiceConfig();
export class ModelRepository implements IModelRepository {
  async getModelById(id: number): Promise<IModelDtoResponse> {
    const response: AxiosResponse<IModelDtoResponse> = await http.get(
      `/model/${id}`
    );
    return response.data;
  }
  async postModel(Model: IModelDtoRequest): Promise<void> {
    await http.post("/model", Model);
  }
  async putModel(Model: IModelDtoRequest): Promise<void> {
    await http.put("/model", Model);
  }
  async deleteModelById(id: number): Promise<void> {
    await http.delete(`/model/${id}`);
  }
  async findPaginado(
    params: IModelsPaginadosFilterRequest
  ): Promise<PaginationResponse<IModelDtoResponse>> {
    const response: AxiosResponse<PaginationResponse<IModelDtoResponse>> =
      await http.get("/model/listar", {
        params,
      });
    return response.data;
  }
  getAll: () => Promise<CodigoDescricaoType[]> = async () => {
    const response: AxiosResponse<CodigoDescricaoType[]> = await http.get(
      "/model"
    );
    return response.data;
  };
}
