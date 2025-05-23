import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Check, Plus } from "lucide-react";
import { FC } from "react";
import { InferType } from "yup";
import { initialValues } from "../../constants";
import { validationSchema } from "../../formSchema";
import useAddCityAPI from "../../hooks/useAddCityAPI";
import useUpdateCityAPI from "../../hooks/useUpdateCityAPI";
import { AddCityFormProps } from "../../types";

type FormValuesTypes = InferType<typeof validationSchema>;

const AddCityForm: FC<AddCityFormProps> = ({
  cityToUpdate,
  setCityToUpdate,
  handleCloseCityFormDialog,
}) => {
  const isUpdateAction: boolean = !!cityToUpdate.id;

  const { addCity, isPending } = useAddCityAPI(handleCloseCityFormDialog);
  const { updateCity, isUpdating } = useUpdateCityAPI(
    cityToUpdate,
    handleCloseCityFormDialog
  );

  const onSubmit = (values: FormValuesTypes) => {
    setCityToUpdate({ id: cityToUpdate.id, ...values });
    if (isUpdateAction) updateCity({ id: cityToUpdate.id, ...values });
    else addCity({ ...values });
  };

  const formikProps = useFormik({
    initialValues: isUpdateAction ? cityToUpdate : initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Paper variant="outlined" component="fieldset" sx={{ padding: 2 }}>
          <Typography variant="caption" component="legend" sx={{ m: 0 }}>
            City Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="name" placeholder="City name" />
            </Grid>

            <Grid item xs={12}>
              <TextField name="description" placeholder="Description" />
            </Grid>
          </Grid>
        </Paper>
        <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
          <LoadingButton
            variant="contained"
            color="primary"
            type="submit"
            endIcon={isUpdateAction ? <Check /> : <Plus />}
            loading={isPending || isUpdating}
          >
            {isUpdateAction ? "Save" : "Add"}
          </LoadingButton>
          <Button
            variant="contained"
            color="warning"
            onClick={handleCloseCityFormDialog}
          >
            Cancel
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default AddCityForm;
