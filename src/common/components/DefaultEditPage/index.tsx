import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { DeepPartial, DefaultValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AnyObjectSchema } from "yup";
import { useFetchUseCase } from "../../../hooks/useFetchUseCase";
import { IBaseUseCase } from "../../../utils/IBaseUseCase";
import ActionButtons from "../ActionButtons";
import Page from "../Page";
import PageInfoAlerts from "../PageInfoAlets";

import { SweetAlert } from "../SweetAlert";
import { InnerFormProps } from "../types";

interface IDefaultEditPageProps<FormType, GetOneResponse, SaveParams> {
  title: string;
  successMessage: string;
  successMessageDelete?: string;
  editUseCase: IBaseUseCase<SaveParams, void>;
  getOneUseCase: IBaseUseCase<number, GetOneResponse>;
  form: (props: InnerFormProps<FormType>) => React.ReactNode;
  formDataToSaveParams?: (formData: FormType) => SaveParams;
  getOneResponseToFormType?: (response: GetOneResponse) => FormType;
  formValidator: AnyObjectSchema;
  defaultValues?: DeepPartial<FormType>;
  goBackRoute: string;
  formDataToDeleteParams?: (formData: any) => any;
  deleteUseCase?: IBaseUseCase<any, void>;
  titleDelete?: string;
  subtitleDelete?: string;
}

export function DefaultEditPage<FormType, GetOneResponse, SaveParams>({
  title,
  editUseCase,
  getOneUseCase,
  form,
  successMessage,
  successMessageDelete,
  formDataToSaveParams,
  getOneResponseToFormType,
  formValidator,
  formDataToDeleteParams,
  deleteUseCase,
  titleDelete,
  subtitleDelete,
  defaultValues,
}: Readonly<IDefaultEditPageProps<FormType, GetOneResponse, SaveParams>>) {
  const { control, reset, handleSubmit, watch, setValue } = useForm<FormType>({
    resolver: yupResolver(formValidator),
    defaultValues: defaultValues as DefaultValues<FormType>,
  });

  const { id } = useParams<{ id: string }>();
  const { executePromise, errorMessage, setErrorMessage } = useFetchUseCase();
  const [showSweetAlert, setShowSweetAlert] = useState<boolean>(false);
  const [showSweetAlertDelete, setShowSweetAlertDelete] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleSave = handleSubmit((values) => {
    executePromise(
      async () => {
        const params = formDataToSaveParams
          ? formDataToSaveParams(values)
          : values;
        await editUseCase.execute(params as any);
      },
      () => setShowSweetAlert(true)
    );
  });

  const handleDelete = handleSubmit((values) => {
    executePromise(
      async () => {
        const params = formDataToDeleteParams
          ? formDataToDeleteParams(values)
          : values;
        await deleteUseCase.execute(params);
      },
      () => {
        setShowSweetAlertDelete(true);
      }
    );
  });

  useEffect(() => {
    executePromise(
      () => getOneUseCase.execute(+id),
      (resp) => {
        const formData = getOneResponseToFormType
          ? getOneResponseToFormType(resp)
          : resp;
        reset(formData as any);
      }
    );
  }, [id, executePromise, getOneResponseToFormType, getOneUseCase, reset]);

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
          onConfirm={() => navigate(-1)}
        />
      )}
      {showSweetAlertDelete && (
        <SweetAlert
          title={successMessageDelete}
          severity="success"
          onConfirm={() => navigate(-1)}
        />
      )}

      {form({ control, watch, setValue })}

      {deleteUseCase ? (
        <ActionButtons
          titleDelete={titleDelete}
          subTitleDelete={subtitleDelete}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      ) : (
        <ActionButtons handleSave={handleSave} />
      )}
    </Page>
  );
}
