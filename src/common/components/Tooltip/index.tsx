import React, { ReactNode } from "react";
import { StyledTooltip } from "./styles";

interface ITooltipProps {
  title: NonNullable<ReactNode>;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  children: React.ReactElement<any, any>;
}

export const Tooltip: React.FC<ITooltipProps> = ({
  title,
  placement,
  children,
  ...rest
}) => {
  return (
    <StyledTooltip title={title} placement={placement || "top"} arrow {...rest}>
      <span>{children}</span>
    </StyledTooltip>
  );
};
