import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import { Control, Controller, Path } from "react-hook-form";
import { FormFieldWrapper } from "../FormFieldWrapper";
import { StyledInputNumeric } from "./style";

interface Props<FormType> {
  control: Control<FormType>;
  id?: string;
  label?: ReactNode;
  name: Path<FormType>;
  value?: string | number;
  placeholder?: string;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  dataTestId?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  helperMessage?: string;
  step?: string;
  prefix?: string;
  suffix?: string;
  decimalScale: number;
  allowNegative?: boolean;
  thousandSeparator?: string | false;
}

export const ControlledInputNumberMask = <FormType,>({
  control,
  id,
  label,
  name,
  placeholder,
  onBlur,
  onFocus,
  dataTestId,
  disabled,
  maxLength,
  onChange,
  autoFocus,
  helperMessage,
  step,
  prefix,
  suffix,
  decimalScale,
  allowNegative,
  thousandSeparator,
  ...props
}: Props<FormType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange: controlledOnChange },
        fieldState: { error },
      }) => (
        <FormFieldWrapper
          label={label}
          error={error?.message}
          helperMessage={helperMessage}
          id={id || name}
        >
          <StyledInputNumeric
            id={id || name}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder || "Digite"}
            value={value != null ? (value as string) : ""}
            onChange={controlledOnChange}
            thousandsGroupStyle="thousand"
            decimalScale={decimalScale}
            decimalSeparator=","
            thousandSeparator={thousandSeparator ?? "."}
            fixedDecimalScale
            onFocus={onFocus}
            onBlur={onBlur}
            data-testid={dataTestId || name}
            disabled={disabled}
            autoFocus={autoFocus}
            step={step}
            prefix={prefix || undefined}
            suffix={suffix || undefined}
            allowNegative={allowNegative}
            {...props}
          />
        </FormFieldWrapper>
      )}
    />
  );
};
