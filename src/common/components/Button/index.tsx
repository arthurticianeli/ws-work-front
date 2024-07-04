import { FunctionComponent } from "react";

import { IButtonProps } from "./ButtonComponent.types";
import { StyledButton } from "./styles";

const Button: FunctionComponent<IButtonProps> = ({
  color,
  fontColor,
  transparent,
  children,
  loading,
  size = "large",
  borderSize,
  ...rest
}) => {
  return (
    <StyledButton
      $color={color}
      $size={size}
      $transparent={transparent}
      $fontColor={fontColor}
      $borderSize={borderSize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
