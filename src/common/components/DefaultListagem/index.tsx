import { useFetchUseCase } from "hooks/useFetchUseCase";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaginationRequest } from "utils/PaginationRequest";
import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import { PaginationResponse } from "../../../utils/PaginationResponse";
import { RequireAtLeastOne } from "../../../utils/RequireAtLeastOneType";
import Page from "../Page";
import PageInfoAlerts from "../PageInfoAlets";
import Pagination from "../Pagination";
import { IColumnProp, TableComponent } from "../TableComponent";
import { InnerFormProps } from "../types";
import { DefaultFilter } from "./components/DefaultFilter";
import { FilterContainer, FilterHeader } from "./styles";

interface IDefaultListagemProps<FilterParams, TableData, SaveParams> {
  title: string;
  newItemRoute: string;
  filterFields?: (props: InnerFormProps<FilterParams>) => React.ReactNode;
  columns: RequireAtLeastOne<
    IColumnProp<TableData>,
    "renderItem" | "columnKey"
  >[];
  usecase: IBaseUseCase<FilterParams, PaginationResponse<TableData>>;
  formDataToSaveParams?: (formData: FilterParams) => SaveParams;
}

export type FilterParams<T> = {
  [K in keyof T]?: T[K];
} & {
  page: number;
  pageSize: number;
};

export function DefaultListagem<
  FilterParams extends PaginationRequest,
  TableData,
  SaveParams = FilterParams
>({
  title,
  newItemRoute,
  filterFields,
  columns,
  usecase,
  formDataToSaveParams,
}: Readonly<IDefaultListagemProps<FilterParams, TableData, SaveParams>>) {
  const navigate = useNavigate();
  const { executePromise, errorMessage, setErrorMessage } = useFetchUseCase();
  const [filter, setFilter] = useState<FilterParams>({
    page: 1,
    pageSize: 10,
  } as FilterParams);
  const [data, setData] = useState<TableData[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = useCallback(() => {
    const searchParams = formDataToSaveParams
      ? formDataToSaveParams(filter)
      : filter;
    executePromise(
      () => usecase.execute(searchParams as unknown as FilterParams),
      (response: PaginationResponse<TableData>) => {
        setData(response.content || []);
        setTotalPages(response.page.totalElements || 0);
      }
    );
  }, [filter, executePromise, formDataToSaveParams, usecase]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const changePagination = useCallback((page: number) => {
    setFilter((prev) => ({ ...prev, page }));
  }, []);

  const onSubmitFilter = useCallback((filterValues: Partial<FilterParams>) => {
    setFilter((prev) => ({ ...prev, ...filterValues, page: 1 }));
  }, []);

  const handleNew = useCallback(() => {
    if (newItemRoute) navigate(newItemRoute);
  }, [navigate, newItemRoute]);

  return (
    <Page
      showHeaderActions
      title={title}
      actionNew={!!newItemRoute}
      handleNew={handleNew}
    >
      <PageInfoAlerts
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <FilterContainer>
        <FilterHeader>Filtro</FilterHeader>
        <DefaultFilter filterFields={filterFields} onSearch={onSubmitFilter} />
      </FilterContainer>
      <TableComponent<TableData> columns={columns} data={data} />
      <Pagination
        currentPage={filter.page}
        recordsPerPage={filter.pageSize}
        setCurrentPage={changePagination}
        totalRecords={totalPages}
      />
    </Page>
  );
}
