import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { StyledInput } from "styles/global";
import { FormFieldWrapper } from "../FormFieldWrapper";

interface Props<FormType extends FieldValues> {
  control: Control<FormType>;
  id?: string;
  type?: string;
  label?: ReactNode;
  name: Path<FormType>;
  value?: string | number;
  placeholder?: string;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  mask?: (value: string) => string;
  dataTestId?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  helperMessage?: string;
  step?: string;
  autoComplete?: string;
  min?: string | number;
  max?: string | number;
}

const ControlledInput = <FormType extends FieldValues>({
  control,
  id,
  type,
  label,
  name,
  placeholder,
  onBlur,
  onFocus,
  dataTestId,
  mask,
  disabled,
  maxLength,
  onChange,
  autoFocus,
  helperMessage,
  step,
  autoComplete,
  min,
  max,
  ...props
}: Props<FormType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange: controllerOnChange, ref },
        fieldState: { error },
      }) => (
        <FormFieldWrapper
          label={label}
          error={error?.message}
          helperMessage={helperMessage}
          id={id || name}
        >
          <StyledInput
            ref={ref}
            id={id || name}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder || "Digite"}
            type={type}
            value={value != null ? (value as string) : ""}
            onChange={(event) => {
              if (onChange) onChange(event);
              mask
                ? controllerOnChange({
                    ...event,
                    target: { value: mask(event.target.value) },
                  })
                : controllerOnChange(event);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            data-testid={dataTestId || name}
            disabled={disabled}
            autoFocus={autoFocus}
            step={step}
            autoComplete={autoComplete}
            min={min}
            max={max}
            {...props}
          />
        </FormFieldWrapper>
      )}
    />
  );
};

export default ControlledInput;
