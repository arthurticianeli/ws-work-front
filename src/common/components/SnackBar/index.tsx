import { FunctionComponent } from "react";

import { IAlertProps, ISnackBarProps } from "./SnackBarComponenet.types";
import { Container, Content } from "./styles";

const SnackBar: FunctionComponent<ISnackBarProps & IAlertProps> = ({
  message,
  setOpen,
  open,
  severity,
  horizontal,
  vertical,
  duration,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      open={open}
      autoHideDuration={duration | 6000}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: horizontal ?? "center",
        vertical: vertical ?? "bottom",
      }}
      key={(horizontal ?? "center") + (vertical ?? "bottom")}
    >
      <Content
        severity={severity}
        onClose={handleClose}
        style={{
          height: "auto",
          lineHeight: "28px",
          padding: 10,
          whiteSpace: "pre-line",
          alignItems: "center",
        }}
      >
        {message}
      </Content>
    </Container>
  );
};

export default SnackBar;
