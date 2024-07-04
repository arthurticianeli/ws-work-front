import { FunctionComponent } from "react";

import { Container } from "./styles";
import { ITextProps } from "./TextComponent.types";

const Text: FunctionComponent<ITextProps> = ({
  id,
  className,
  children,
  color,
  size,
  fontStyle,
  weight,
  style,
  maxWidth,
}) => {
  return (
    <Container
      id={id}
      className={className}
      color={color}
      size={size}
      fontStyle={fontStyle}
      weight={weight}
      style={style}
      maxWidth={maxWidth}
    >
      {children}
    </Container>
  );
};

export default Text;
