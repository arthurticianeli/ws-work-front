import { PaginationRequest } from "../../utils/PaginationRequest";

export interface IBrandsPaginadosFilterRequest extends PaginationRequest {
  nomeMarca?: string;
}
