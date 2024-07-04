import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { RequireAtLeastOne } from "../../../utils/RequireAtLeastOneType";
import { StyledTableHeadCell, StyledTableRow } from "./styles";

export interface IColumnProp<T> {
  title: React.ReactNode;
  columnKey?: keyof T;
  renderItem?: (item: T, rowIdx?: number) => React.ReactNode;
  width?: number | string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
}

export interface ITableComponentProps<T> {
  data: T[];
  columns: RequireAtLeastOne<IColumnProp<T>, "renderItem" | "columnKey">[];
  onClickRow?: (item: T) => void;
}

export function TableComponent<T>({
  data,
  columns,
  onClickRow,
}: Readonly<ITableComponentProps<T>>) {
  return (
    <TableContainer>
      <Table size={"small"}>
        <TableHead>
          <TableRow>
            {columns.map(({ title, width, align }, headerIdx) => (
              <StyledTableHeadCell
                align={align}
                style={{ width }}
                key={`table-head-cell-${headerIdx}-${String(title)}`}
              >
                {title}
              </StyledTableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, rowIdx) => (
            <StyledTableRow
              key={`table-row-${rowIdx}-${String(item)}`}
              onClick={onClickRow ? () => onClickRow(item) : undefined}
            >
              {columns.map(({ columnKey, renderItem, width, align }, index) => {
                let cellContent: React.ReactNode;
                if (renderItem) {
                  cellContent = renderItem(item, rowIdx);
                } else if (columnKey) {
                  cellContent = item[columnKey] as React.ReactNode;
                } else {
                  cellContent = null;
                }
                return (
                  <TableCell
                    align={align}
                    style={{ width }}
                    key={`table-cell-${String(columnKey)}-${rowIdx}-${index}`}
                  >
                    {cellContent}
                  </TableCell>
                );
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
