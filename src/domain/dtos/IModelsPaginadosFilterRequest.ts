import { PaginationRequest } from "../../utils/PaginationRequest";

export interface IModelsPaginadosFilterRequest extends PaginationRequest {
  nomeModelo?: string;
  marca?: number;
}
