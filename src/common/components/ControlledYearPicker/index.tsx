import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Controller, FieldValues, useWatch } from "react-hook-form";
import { FormFieldWrapper } from "../FormFieldWrapper";
import { StyledYearPicker } from "./style";

interface Props<FormType extends FieldValues> {
  control: any;
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
  dataTestId?: string;
  defaultValue?: string;
  helperMessage?: string;
  options?: string[];
  onChange?: (ano: number) => void;
}

export const ControlledYearPicker = <FormType extends FieldValues>({
  control,
  name,
  label,
  error,
  disabled,
  dataTestId,
  defaultValue,
  helperMessage,
  options,
  onChange,
  ...props
}: Props<FormType>) => {
  const value = useWatch({
    control,
    name,
    defaultValue: defaultValue
      ? new Date(defaultValue).getFullYear()
      : new Date().getFullYear(),
  });
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange: controllerOnChange },
        fieldState: { error },
      }) => (
        <FormFieldWrapper
          label={label}
          error={error?.message}
          helperMessage={helperMessage}
          id={name}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StyledYearPicker
              value={new Date(value, 0)}
              onChange={(date: Date) => {
                const year = date.getFullYear();
                controllerOnChange(year);
                if (onChange) onChange(year);
              }}
              disabled={disabled}
              disableFuture
              autoFocus
              maxDate={new Date()}
              {...props}
            />
          </LocalizationProvider>
        </FormFieldWrapper>
      )}
    />
  );
};
