import { Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { colors } from "../../../../styles/colors";
import Button from "../../Button";
import { InnerFormProps } from "../../types";

interface IDefaultFilterProps<FilterParams> {
  onSearch: (params: FilterParams) => void;
  filterFields: (props: InnerFormProps<FilterParams>) => React.ReactNode;
}

export function DefaultFilter<T>({
  filterFields,
  onSearch,
}: Readonly<IDefaultFilterProps<T>>) {
  const { control, handleSubmit, reset } = useForm<T>();

  function onSubmitForm(values: T) {
    onSearch(values);
  }

  return (
    <Grid item justifyContent="flex-end" container xs={12} spacing={2}>
      <Grid item container mt={0} spacing={4}>
        {filterFields({ control })}
      </Grid>
      <Grid item>
        <Button color={colors.grayLight} onClick={() => reset()}>
          Limpar campos
        </Button>
      </Grid>
      <Grid item>
        <Button
          color={colors.primaryColor}
          onClick={handleSubmit(onSubmitForm as any)}
        >
          Buscar
        </Button>
      </Grid>
    </Grid>
  );
}
