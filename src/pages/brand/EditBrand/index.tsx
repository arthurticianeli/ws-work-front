import { DefaultEditPage } from "common/components/DefaultEditPage";
import { IBrandDtoRequest } from "domain/dtos/IBrandDtoRequest";
import { IBrandDtoResponse } from "domain/dtos/IBrandDtoResponse";
import { DeleteBrandById } from "domain/usecases/brand/DeleteBrandById";
import { GetBrandById } from "domain/usecases/brand/GetBrandById";
import { UpdateBrand } from "domain/usecases/brand/UpdateBrandCar";
import { BrandRepository } from "infra/BrandRepository";
import BrandForm from "../BrandForm";
import { BrandFormValidator } from "../BrandForm/BrandFormValidator";

export const EditBrand = () => {
  const brandRepository = new BrandRepository();
  const getBrandById = new GetBrandById(brandRepository);
  const updateBrand = new UpdateBrand(brandRepository);
  const deleteBrandById = new DeleteBrandById(brandRepository);

  return (
    <DefaultEditPage<IBrandDtoRequest, IBrandDtoResponse, IBrandDtoRequest>
      title="Marca de veículo"
      successMessage="Marca de veículo salvo com sucesso"
      successMessageDelete="Marca de veículo deletado com sucesso"
      getOneUseCase={getBrandById}
      editUseCase={updateBrand}
      deleteUseCase={deleteBrandById}
      formDataToDeleteParams={(data) => data.id}
      goBackRoute="/brands"
      form={({ control }) => <BrandForm control={control} />}
      formValidator={BrandFormValidator}
    />
  );
};
