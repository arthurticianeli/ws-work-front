import IconButton from "@mui/material/IconButton";
import { DefaultListagem } from "common/components/DefaultListagem";
import { IBrandDtoResponse } from "domain/dtos/IBrandDtoResponse";
import { IBrandsPaginadosFilterRequest } from "domain/dtos/IBrandsPaginadosFilterRequest";
import { FindBrandsByFiltroPaginado } from "domain/usecases/brand/FindBrandsByFiltroPaginado";
import { BrandRepository } from "infra/BrandRepository";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../styles/colors";
import { FilterBrand } from "./components/FilterBrand";

export const ListBrands = () => {
  const navigate = useNavigate();
  const brandRepository = new BrandRepository();
  const findBrandsByFiltroPaginado = new FindBrandsByFiltroPaginado(
    brandRepository
  );

  return (
    <DefaultListagem<
      IBrandsPaginadosFilterRequest,
      IBrandDtoResponse,
      IBrandsPaginadosFilterRequest
    >
      title="Lista de marcas de veículo"
      newItemRoute="/brand/criar"
      columns={[
        { title: "Nome da marca", columnKey: "nomeMarca" },
        {
          title: "",
          width: 40,
          renderItem: (item) => (
            <IconButton
              onClick={() => navigate(`/brand/editar/${item?.id}`)}
              title="editar"
              data-testid="editar"
            >
              <IoIosArrowForward size={20} color={colors.primaryColor} />
            </IconButton>
          ),
        },
      ]}
      usecase={findBrandsByFiltroPaginado}
      filterFields={({ control }) => <FilterBrand control={control} />}
    />
  );
};
