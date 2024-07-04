import * as Yup from "yup";

export const BrandFormValidator = Yup.object().shape({
  nomeMarca: Yup.string().required("Campo obrigatório"),
});
