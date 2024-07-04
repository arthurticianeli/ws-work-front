import { FunctionComponent } from "react";
import { MdOutlineInfo } from "react-icons/md";

import { colors } from "../../../styles/colors";
import { Tooltip } from "../Tooltip";
import { ILabelProps } from "./LabelComponent.types";
import {
  HelperMessage,
  LabelHelperMessageWrapper,
  LabelWrapper,
  StyledLabel,
  TooltipWrapper,
} from "./styles";

export const Label: FunctionComponent<ILabelProps> = ({
  label,
  helperMessage,
  id,
  tooltipMessage,
}) => {
  return (
    <LabelWrapper>
      <LabelHelperMessageWrapper>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {helperMessage && <HelperMessage>{helperMessage}</HelperMessage>}
      </LabelHelperMessageWrapper>
      {tooltipMessage && (
        <TooltipWrapper>
          <Tooltip title={tooltipMessage}>
            <MdOutlineInfo size={16} color={colors.primaryColor} />
          </Tooltip>
        </TooltipWrapper>
      )}
    </LabelWrapper>
  );
};
