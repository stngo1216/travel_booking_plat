import * as yup from "yup";

export const validationSchema = yup.object().shape({
  userName: yup.string().required("Нэвтрэх нэр оруулна уу"),
  password: yup.string().required("Нууц үг оруулна уу"),
});
