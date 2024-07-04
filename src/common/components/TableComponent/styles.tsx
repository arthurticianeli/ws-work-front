import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../../styles/colors";

export const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  height: "44px",

  backgroundColor: colors.secondaryColor,
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: "44px",
  "&:nth-of-type(even)": {
    backgroundColor: colors.grayVerySoft,
  },
}));
