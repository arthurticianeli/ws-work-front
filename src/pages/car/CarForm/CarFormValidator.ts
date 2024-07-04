import * as Yup from "yup";

export const CarFormValidator = Yup.object().shape({
  modeloId: Yup.number().required("Campo obrigatório"),
  ano: Yup.number().required("Confirme o ano"),
  combustivel: Yup.string().required("Campo obrigatório"),
  numPortas: Yup.number().required("Campo obrigatório"),
  cor: Yup.string().required("Campo obrigatório"),
});
