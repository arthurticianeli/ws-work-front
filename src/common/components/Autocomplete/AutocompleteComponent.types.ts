import { SvgIconProps } from "@mui/material";

export interface IAutocomplete {
  label?: React.ReactNode;
  placeholder?: string;
  id?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<any>, value: any) => void;
  inputValue?: string;
  onInputChange?: (event: React.ChangeEvent<any>, value: string) => void;
  options: any[];
  getOptionLabel?: (option: any) => string;
  groupBy?: (option: any) => string;
  getOptionSelected?: any;
  getOptionDisabled?: any;
  loading?: boolean;
  dataTestId?: string;
  popupIcon?: React.ComponentType<SvgIconProps>;
  className?: string;
  defaultValue?: any;
  helperMessage?: React.ReactNode;
  error?: string;
  disabled?: boolean;
  disableClearable?: boolean;
  multiple?: boolean;
  freeSolo?: boolean;
  clearOnBlur?: boolean;
  tooltipMessage?: string;
}
