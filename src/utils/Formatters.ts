import { CodigoDescricaoType } from "./CodigoDescricaoType";

export const formataCodigoDescricao = (value?: CodigoDescricaoType) => {
  return `${value?.codigo || ""} - ${value?.descricao || ""}`;
};
