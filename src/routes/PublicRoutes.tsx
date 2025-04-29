import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import {
  AccessDenied,
  BookingConfirmation,
  Checkout,
  Cities,
  HotelDetails,
  Hotels,
  LandingPage,
  Login,
  NotFound,
  Rooms,
  SearchForReservations,
  Unauthenticated,
} from "./imports";

export const routes: RouteObject[] = [
  {
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
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />, // AppLayout-гүй маршрутын алдаанууд
  },
  {
    path: "access-denied",
    element: <AccessDenied />,
  },
  {
    path: "unauthenticated",
    element: <Unauthenticated />,
  },
];
