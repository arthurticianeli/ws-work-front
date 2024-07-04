import IconButton from "@mui/material/IconButton";
import { DefaultListagem } from "common/components/DefaultListagem";
import { CarRepository } from "infra/CarRepository";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ICarBrandDtoResponse } from "../../../domain/dtos/ICarBrandDtoResponse";
import { ICarsPaginadosFilterRequest } from "../../../domain/dtos/ICarsPaginadosFilterRequest";
import { FindCarsByNomeModeloAndMarcaPaginado } from "../../../domain/usecases/car/FindCarsByFiltroPaginado";
import { colors } from "../../../styles/colors";
import { FilterCar } from "./components/FilterCar";

export const ListCars = () => {
  const navigate = useNavigate();
  const carRepository = new CarRepository();
  const findCarsByNomeModeloAndMarcaPaginado =
    new FindCarsByNomeModeloAndMarcaPaginado(carRepository);

  return (
    <DefaultListagem<
      ICarsPaginadosFilterRequest,
      ICarBrandDtoResponse,
      ICarsPaginadosFilterRequest
    >
      title="Lista de veículos"
      newItemRoute="/car/criar"
      columns={[
        { title: "Nome do Modelo", columnKey: "nomeModelo" },
        { title: "Marca", columnKey: "nomeMarca" },
        { title: "Ano", columnKey: "ano" },
        {
          title: "Valor",
          columnKey: "valor",
          renderItem: (item) => {
            return `R$ ${item.valor.toLocaleString("pt-BR")}`;
          },
        },
        {
          title: "",
          width: 40,
          renderItem: (item) => (
            <IconButton
              onClick={() => navigate(`/car/editar/${item?.id}`)}
              title="editar"
              data-testid="editar"
            >
              <IoIosArrowForward size={20} color={colors.primaryColor} />
            </IconButton>
          ),
        },
      ]}
      usecase={findCarsByNomeModeloAndMarcaPaginado}
      filterFields={({ control }) => <FilterCar control={control} />}
    />
  );
};
