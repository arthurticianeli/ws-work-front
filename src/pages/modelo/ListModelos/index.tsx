import IconButton from "@mui/material/IconButton";
import { DefaultListagem } from "common/components/DefaultListagem";
import { IModelDtoResponse } from "domain/dtos/IModelDtoResponse";
import { IModelsPaginadosFilterRequest } from "domain/dtos/IModelsPaginadosFilterRequest";
import { FindModelsByFiltroPaginado } from "domain/usecases/modelo/FindModelsByFiltroPaginado";
import { ModelRepository } from "infra/ModelRepository";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../styles/colors";
import { FilterModelo } from "./components/FilterModelo";

export const ListModelos = () => {
  const navigate = useNavigate();
  const modelRepository = new ModelRepository();
  const findModelsByFiltroPaginado = new FindModelsByFiltroPaginado(
    modelRepository
  );

  return (
    <DefaultListagem<
      IModelsPaginadosFilterRequest,
      IModelDtoResponse,
      IModelsPaginadosFilterRequest
    >
      title="Lista de modelos de veículo"
      newItemRoute="/model/criar"
      columns={[
        { title: "Nome da modelo", columnKey: "nome" },
        {
          title: "",
          width: 40,
          renderItem: (item) => (
            <IconButton
              onClick={() => navigate(`/Model/editar/${item?.id}`)}
              title="editar"
              data-testid="editar"
            >
              <IoIosArrowForward size={20} color={colors.primaryColor} />
            </IconButton>
          ),
        },
      ]}
      usecase={findModelsByFiltroPaginado}
      filterFields={({ control }) => <FilterModelo control={control} />}
    />
  );
};
