import { FunctionComponent } from "react";
import ReactSweetAlert from "react-bootstrap-sweetalert";
import Button from "../Button";
import { Container } from "./styles";
import { ISweetAlertProps } from "./SweetAlertComponent.types";

import { MdDone } from "react-icons/md";
import { colors } from "../../../styles/colors";

export const SweetAlert: FunctionComponent<ISweetAlertProps> = ({
  title,
  onConfirm,
  severity,
}) => {
  return (
    <Container>
      <ReactSweetAlert
        customClass="custom-sweet-alert"
        customButtons={
          <Button
            data-testid="button-ok-modal"
            color={colors.primaryColor}
            name="OK"
            onClick={onConfirm}
          >
            <MdDone />
            OK
          </Button>
        }
        success={severity === "success"}
        warning={severity === "warning"}
        info={severity === "info"}
        title={title}
        onConfirm={onConfirm}
      />
    </Container>
  );
};
