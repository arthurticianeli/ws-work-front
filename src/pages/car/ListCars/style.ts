import { TableComponent } from "common/components/TableComponent";
import styled from "styled-components";

export const StyledTable = styled(TableComponent)`
  & td,
  th {
    padding-left: 20px;
  }
  & tbody tr td:nth-last-child(1) {
    text-align: center;
    width: 130px;
  }
  & tbody tr td:nth-last-child(5) {
    width: 100px;
  }
`;
