import { PaginationRequest } from "../../utils/PaginationRequest";

export interface ICarsPaginadosFilterRequest extends PaginationRequest {
  modelo?: number;
  brand?: number;
}
