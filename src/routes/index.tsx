import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import BasePage from "common/components/BasePage";
import { CreateBrand } from "pages/brand/CreateBrand";
import { EditBrand } from "pages/brand/EditBrand";
import { ListBrands } from "pages/brand/ListBrands";
import { CreateCar } from "pages/car/CreateCar";
import { EditCar } from "pages/car/EditCar";
import { ListCars } from "pages/car/ListCars";
import { CreateModelo } from "pages/modelo/CreateModelo";
import { EditModelo } from "pages/modelo/EditModelo";
import { ListModelos } from "pages/modelo/ListModelos";

export const Routes: React.FC = () => {
  return (
    <BasePage>
      <Switch>
        <Route path="/" element={<ListCars />} />
        <Route path="/car/criar" element={<CreateCar />} />
        <Route path="/car/editar/:id" element={<EditCar />} />
        <Route path="/brands" element={<ListBrands />} />
        <Route path="/brand/criar" element={<CreateBrand />} />
        <Route path="/brand/editar/:id" element={<EditBrand />} />
        <Route path="/models" element={<ListModelos />} />
        <Route path="/model/criar" element={<CreateModelo />} />
        <Route path="/model/editar/:id" element={<EditModelo />} />
      </Switch>
    </BasePage>
  );
};
