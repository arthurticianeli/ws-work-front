import { DefaultCreatePage } from "common/components/DefaultCreatePage";
import { IBrandDtoRequest } from "domain/dtos/IBrandDtoRequest";
import { PostBrand } from "domain/usecases/brand/PostBrandCar";
import { BrandRepository } from "infra/BrandRepository";
import BrandForm from "../BrandForm";
import { BrandFormValidator } from "../BrandForm/BrandFormValidator";

export const CreateBrand = () => {
  const brandRepository = new BrandRepository();
  const postBrand = new PostBrand(brandRepository);

  return (
    <DefaultCreatePage<IBrandDtoRequest, IBrandDtoRequest>
      title="Marca de veículo"
      successMessage="Marca de veículo salvo com sucesso"
      createUseCase={postBrand}
      goBackRoute="/brands"
      form={({ control }) => <BrandForm control={control} />}
      formValidator={BrandFormValidator}
    />
  );
};
