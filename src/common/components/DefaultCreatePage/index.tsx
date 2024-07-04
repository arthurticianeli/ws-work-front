import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import { useFetchUseCase } from "hooks/useFetchUseCase";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { colors } from "styles/colors";
import { IBaseUseCase } from "utils/IBaseUseCase";
import { AnyObjectSchema } from "yup";
import Button from "../Button";
import Page from "../Page";
import PageInfoAlerts from "../PageInfoAlets";
import { SweetAlert } from "../SweetAlert";
import { InnerFormProps } from "../types";

interface IDefaultCreatePageProps<FormType, SaveParams> {
  title: string;
  successMessage: string;
  createUseCase: IBaseUseCase<SaveParams, void>;
  form: (props: InnerFormProps<FormType>) => React.ReactNode;
  formValidator: AnyObjectSchema;
  goBackRoute: string;
  formDataToSaveParams?: (formData: FormType) => SaveParams;
}

export function DefaultCreatePage<FormType, SaveParams>({
  title,
  createUseCase,
  form,
  successMessage,
  formDataToSaveParams,
  formValidator,
  goBackRoute,
}: Readonly<IDefaultCreatePageProps<FormType, SaveParams>>) {
  const { control, handleSubmit, watch, setValue } = useForm<FormType>({
    resolver: yupResolver(formValidator),
  });

  const { executePromise, errorMessage, setErrorMessage } = useFetchUseCase();
  const [showSweetAlert, setShowSweetAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSave = handleSubmit((values) => {
    executePromise(
      async () => {
        const params = formDataToSaveParams
          ? formDataToSaveParams(values)
          : values;
        await createUseCase.execute(params as any);
      },
      () => setShowSweetAlert(true)
    );
  });

  return (
    <Page title={title} showHeaderActions>
      <PageInfoAlerts
        errorMessage={errorMessage}
        setErrorMessage={() => setErrorMessage("")}
      />
      {showSweetAlert && (
        <SweetAlert
          title={successMessage}
          severity="success"
          onConfirm={() => navigate(goBackRoute)}
        />
      )}

      {form({ control, watch, setValue })}

      <Grid container item spacing={4} mx={10} justifyContent="flex-end">
        <Grid item xs={2}>
          <Button size="full" color={colors.primaryColor} onClick={handleSave}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Page>
  );
}
