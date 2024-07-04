import { Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../../styles/colors";

export const StyledTooltip = styled(Tooltip)({
  tooltip: {
    backgroundColor: colors.primaryColor,
    color: colors.white,
    maxWidth: 220,
    fontSize: "12px",
    border: "1px solid",
    borderColor: colors.primaryColor,
  },
  arrow: {
    color: colors.primaryColor,
  },
});
