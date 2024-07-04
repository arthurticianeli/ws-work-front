import { Grid } from "@mui/material";
import ControlledInput from "common/components/ControlledInput";

const BrandForm = ({ control }) => {
  return (
    <Grid container spacing={4} mb={3} alignItems="flex-start">
      <Grid item md={3} xs={12}>
        <ControlledInput
          name="nomeMarca"
          label="Nome da Marca"
          control={control}
        />
      </Grid>
    </Grid>
  );
};

export default BrandForm;
