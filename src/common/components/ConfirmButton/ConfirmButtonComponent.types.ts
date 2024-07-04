import { modalSizes } from "../Modal";

export interface IConfirmButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  modalSize?: modalSizes;
  buttonColor: string;
  buttonSize?: "small" | "medium" | "large" | "full";
  buttonName: string;
  buttonDisabled?: boolean;
  fontButtonColor?: string;
  title: string;
  subTitle?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  focusOnConfirm?: boolean;
  onActionConfirm: () => void;
}
