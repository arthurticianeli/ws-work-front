import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { colors } from "../../../styles/colors";
import { Container, ContainerPage, StyledButton, StyledTotal } from "./styles";

interface IPaginationProps {
  totalRecords: number;
  recordsPerPage: number;
  pageNeighbours?: number;
  currentPage: number;
  setCurrentPage(value: number): void;
  handleFilter?(page?: number): void;
}

const Pagination: React.FC<IPaginationProps> = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  setCurrentPage,
  pageNeighbours = 5,
  handleFilter,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const range = (from: any, to: any, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = 5 * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = ["...", ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, "..."];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = ["...", ...pages, "..."];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();

  function handleAddPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      if (handleFilter) handleFilter(currentPage + 1);
    }
  }

  function handleDecPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (handleFilter) handleFilter(currentPage - 1);
    }
  }

  function handlePage(pg: number) {
    setCurrentPage(pg);
    if (handleFilter) handleFilter(pg);
  }

  return (
    <Container>
      <StyledTotal>Total {totalRecords} itens</StyledTotal>
      {totalRecords >= recordsPerPage && (
        <StyledButton
          data-testid="prevPagination"
          size="small"
          transparent={true}
          onClick={handleDecPage}
        >
          <BsChevronLeft size={10} color={colors.black} />
        </StyledButton>
      )}
      {pages.map((pg) => {
        if (pg === "...") return <span key={pg}>{pg}</span>;
        return (
          <ContainerPage
            key={pg}
            $active={currentPage === pg}
            onClick={() => {
              handlePage(pg);
            }}
          >
            {pg}
          </ContainerPage>
        );
      })}
      {totalRecords >= recordsPerPage && (
        <StyledButton
          data-testid="nextPagination"
          size="large"
          transparent={true}
          onClick={handleAddPage}
        >
          <BsChevronRight size={10} color={colors.black} />
        </StyledButton>
      )}
    </Container>
  );
};

export default Pagination;
