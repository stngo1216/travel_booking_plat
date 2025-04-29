import { clearCart } from "@/features/Cart";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppDispatch } from "@/store";
import { getUrlQueryString } from "@/utils/urlQueryParams";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addBookingAPI } from "../API";
import { AddBookingAPIResponse } from "../API/types";

const useAddBookingAPI = () => {
  const dispatch = useAppDispatch();
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: addBooking, isPending } = useMutation({
    mutationFn: addBookingAPI,
    onSuccess: (response: AddBookingAPIResponse) => {
      showSuccessSnackbar({ message: "Аялал сагсанд амжилттай нэмэгдлээ" });
      dispatch(clearCart());

      const urlWithQuery = getUrlQueryString(
        "/me/booking-confirmation",
        response
      );
      navigate(urlWithQuery);
    },
    onError: () => {
      showErrorSnackbar({ message: "Уучлаарай алдаа гарлаа" });
    },
  });

  return {
    addBooking,
    isPending,
  };
};

export default useAddBookingAPI;
