import AutoCompleteField from "@/components/Fields/AutoCompleteField";
import TextField from "@/components/Fields/TextField";
import { Hotel } from "@/types";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Plus } from "lucide-react";
import { FC } from "react";
import { InferType } from "yup";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import useAddRoomAPI from "../hooks/useAddRoomAPI";
import { AddRoomFormProps } from "../types";

export type FormValuesTypes = InferType<typeof validationSchema>;

const AddRoomForm: FC<AddRoomFormProps> = ({
  hotels,
  refetchRooms,
  handleCloseAddRoomDialog,
  addRoom,
}) => {
  // const { addRoom, isPending } = useAddRoomAPI(
  //   refetchRooms,
  //   handleCloseAddRoomDialog
  // );

  const onSubmit = (values: FormValuesTypes) => {
    addRoom(values);
    // addRoom({ ...values });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { setFieldValue, values } = formikProps;

  return (
    <Stack>
      <FormikProvider value={formikProps}>
        <Form>
          <Paper variant="outlined" component="fieldset" sx={{ padding: 2 }}>
            <Typography variant="caption" component="legend" sx={{ m: 0 }}>
              Аялалын мэдээлэл оруулах
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField name="roomNumber" placeholder="Аялалын нэр" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <AutoCompleteField
                  name="hotelId"
                  placeholder="Аялын багц"
                  size="small"
                  options={hotels}
                  getOptionLabel={(option) => (option as Hotel).title || ""}
                  value={values.hotel}
                  onChange={(_, newValue) => {
                    console.log(newValue);
                    setFieldValue("hotel", newValue);
                    setFieldValue(
                      "hotelId",
                      (newValue as Hotel)?.hotelId ?? ""
                    );
                  }}
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="cost"
                  type="number"
                  placeholder="Үнэ"
                  value={values.cost === 0 ? "" : values.cost}
                />
              </Grid>
            </Grid>
          </Paper>
          <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
            <LoadingButton
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<Plus />}
              // loading={isPending}
            >
              Нэмэх
            </LoadingButton>
            <Button
              variant="contained"
              color="warning"
              onClick={handleCloseAddRoomDialog}
            >
              Хаах
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default AddRoomForm;
