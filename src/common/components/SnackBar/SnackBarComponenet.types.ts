import { SnackbarCloseReason } from "@mui/material";

export type AlertSeverityType = "error" | "warning" | "info" | "success";

export interface IAlertProps {
  severity: AlertSeverityType;
  onClose?: (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => void;
}

export interface ISnackBarProps {
  message?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
  duration?: number;
}
