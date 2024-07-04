import * as Yup from "yup";

export const ModeloFormValidator = Yup.object().shape({
  marcaId: Yup.number().required("Campo obrigatório"),
  nome: Yup.string().required("Campo obrigatório"),
  valorFipe: Yup.string().required("Campo obrigatório"),
});
