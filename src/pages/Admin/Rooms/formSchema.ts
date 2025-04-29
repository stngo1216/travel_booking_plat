import * as yup from "yup";

export const validationSchema = yup.object().shape({
  roomNumber: yup.string().required("Аялын нэр оруулна уу"),
  hotelId: yup.string().required("Аялалын багц сонгоно уу"),
  cost: yup
    .number()
    .min(1, "Үнэ 0-ээс их байх ёстой")
    .required("Аялалын үнэ оруулна уу"),
  hotel: yup
    .object()
    .shape({
      id: yup.string(),
      name: yup.string(),
      description: yup.string(),
      starRating: yup.number(),
      latitude: yup.number(),
      longitude: yup.number(),
    })
    .required("Аялалын багц сонгоно уу"),
});
