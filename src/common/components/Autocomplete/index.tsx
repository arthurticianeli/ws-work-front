import { FunctionComponent } from "react";
import { FormFieldWrapper } from "../FormFieldWrapper";
import { IAutocomplete } from "./AutocompleteComponent.types";
import { StyledAutocomplete, StyledTextField } from "./styles";

const Autocomplete: FunctionComponent<IAutocomplete> = ({
  label,
  placeholder,
  value,
  helperMessage,
  onChange,
  inputValue,
  onInputChange,
  getOptionSelected,
  getOptionDisabled,
  options,
  getOptionLabel,
  groupBy,
  loading,
  popupIcon: PopupIcon,
  className,
  defaultValue,
  error,
  disabled,
  disableClearable,
  multiple,
  freeSolo,
  clearOnBlur,
  dataTestId,
  tooltipMessage,
}) => {
  return (
    <FormFieldWrapper
      label={label}
      error={error}
      tooltipMessage={tooltipMessage}
      helperMessage={helperMessage}
    >
      <StyledAutocomplete
        data-testid={dataTestId}
        defaultValue={defaultValue}
        className={className}
        disableClearable={disableClearable}
        value={value}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        options={options}
        getOptionLabel={getOptionLabel}
        getOptionKey={getOptionSelected}
        getOptionDisabled={getOptionDisabled}
        groupBy={groupBy}
        freeSolo={freeSolo}
        clearOnBlur={clearOnBlur}
        multiple={multiple}
        limitTags={2}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder={placeholder}
            variant="outlined"
          />
        )}
        loading={loading}
        popupIcon={PopupIcon && <PopupIcon fontSize="small" />}
        disabled={disabled}
      />
    </FormFieldWrapper>
  );
};

export default Autocomplete;
