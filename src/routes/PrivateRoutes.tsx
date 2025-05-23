import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import {
  BookingConfirmation,
  Checkout,
  Cities,
  HotelDetails,
  Hotels,
  LandingPage,
  Rooms,
  SearchForReservations,
} from "./imports";

const privateRoutes: RouteObject = {
  path: "/",
  element: <AppLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "search",
      element: <SearchForReservations />,
    },
    {
      path: "hotel/:hotelId",
      element: <HotelDetails />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "booking-confirmation",
      element: <BookingConfirmation />,
    },
    {
      path: "hotels",
      element: <Hotels />,
    },
    {
      path: "cities",
      element: <Cities />,
    },
    {
      path: "rooms",
      element: <Rooms />,
    },
  ],
};

export default privateRoutes;
