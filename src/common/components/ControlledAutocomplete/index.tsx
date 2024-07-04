import { useFetchUseCase } from "hooks/useFetchUseCase";
import { useEffect, useState } from "react";
import { Control, Controller, Path } from "react-hook-form";
import { CodigoDescricaoType } from "utils/CodigoDescricaoType";
import { formataCodigoDescricao } from "utils/Formatters";
import Autocomplete from "../Autocomplete";

interface IControlledAutocompleteProps<FormType, Response> {
  control: Control<FormType>;
  name: Path<FormType>;
  placeholder?: string;
  displayAsCodeAndDescription?: boolean;
  label?: React.ReactNode;
  multiple?: boolean;
  error?: string;
  disabled?: boolean;
  dataTestId?: string;
  disableClearable?: boolean;
  helperMessage?: React.ReactNode;
  options?: CodigoDescricaoType[];
  getOptionDisabled?: (option: CodigoDescricaoType) => boolean;
  tooltipMessage?: string;
  usecasePromiseCallback?: () => Promise<Response>;
  formatOptions?: (resp: Response) => CodigoDescricaoType[];
  loading?: boolean;
  onChange?: (id: number) => void;
  onInputChange?: (event: React.ChangeEvent<any>, value: string) => void;
}

export function ControlledAutocomplete<FormType, Response = any>({
  control,
  name,
  placeholder,
  label,
  displayAsCodeAndDescription = false,
  multiple,
  error,
  disabled,
  dataTestId,
  helperMessage,
  options,
  getOptionDisabled,
  tooltipMessage,
  usecasePromiseCallback,
  formatOptions,
  onChange,
  onInputChange,
  disableClearable,
  loading,
}: Readonly<IControlledAutocompleteProps<FormType, Response>>) {
  const [innerOptions, setInnerOptions] = useState<CodigoDescricaoType[]>([]);
  const { errorMessage, executePromise } = useFetchUseCase();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!usecasePromiseCallback) return;
    executePromise(
      () => usecasePromiseCallback(),
      (resp) => setResponse(resp)
    );
  }, []);

  useEffect(() => {
    if (response) {
      const opt = formatOptions ? formatOptions(response) : response;
      setInnerOptions(opt);
    }
  }, [response, formatOptions]);

  return (
    <Controller<FormType>
      name={name}
      control={control}
      render={({
        field: { onChange: onChangeValues, value },
        fieldState: { error: validationError },
      }) => {
        const currentOption =
          innerOptions.find((option) => option.codigo === value) || null;

        return (
          <Autocomplete
            value={currentOption}
            onChange={(_, val) => {
              onChangeValues(val?.codigo);
              if (onChange && val) {
                onChange(val.codigo);
              }
            }}
            onInputChange={onInputChange}
            options={options || innerOptions}
            loading={loading}
            label={label}
            tooltipMessage={tooltipMessage}
            multiple={multiple}
            disabled={disabled}
            helperMessage={helperMessage}
            disableClearable={disableClearable}
            error={error || errorMessage || validationError?.message}
            defaultValue={currentOption}
            placeholder={placeholder || "Selecione"}
            getOptionLabel={(option) =>
              displayAsCodeAndDescription
                ? formataCodigoDescricao(option)
                : option.descricao || ""
            }
            getOptionSelected={(option, val) => option?.codigo === val?.codigo}
            getOptionDisabled={getOptionDisabled}
            dataTestId={dataTestId || name}
          />
        );
      }}
    />
  );
}
