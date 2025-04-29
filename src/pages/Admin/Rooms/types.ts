import { Hotel, Room } from "@/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { GetHotelRoomsResponse } from "./API/types";
import { FormValuesTypes } from "./components/AddRoomForm";

export interface RoomProps {
  room: Room;
  handleOpenConfirmDeleteDialog: () => void;
  setRoomToDelete: Dispatch<SetStateAction<{ id: string; name: string }>>;
}

export interface AddRoomDialogProps {
  isOpen: boolean;
  hotels: Array<Hotel>;
  handleCloseAddRoomDialog: () => void;
  refetchRooms: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetHotelRoomsResponse, Error>>;
  addRoom: (values: FormValuesTypes) => void;
}

export interface AddRoomFormProps {
  hotels: Array<Hotel>;
  handleCloseAddRoomDialog: () => void;
  refetchRooms: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetHotelRoomsResponse, Error>>;
  addRoom: (values: FormValuesTypes) => void;
}
