import { Alert, AlertProps, Snackbar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IAlertProps } from "./SnackBarComponenet.types";

const ForwardedAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props: Readonly<AlertProps>, ref) => (
    <Alert ref={ref} elevation={6} variant="filled" {...props} />
  )
);
export const Container = styled(Snackbar)``;
export const Content = styled(ForwardedAlert)<IAlertProps>``;
