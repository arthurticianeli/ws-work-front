import { Control, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { UseFormHandleSubmit } from "react-hook-form/dist/types";

export interface InnerFormProps<T> {
  control: Control<T>;
  watch?: UseFormWatch<T>;
  setValue?: UseFormSetValue<T>;
  handleSubmit?: UseFormHandleSubmit<T>;
}
