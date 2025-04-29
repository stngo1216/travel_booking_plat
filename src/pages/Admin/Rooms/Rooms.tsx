import ConfirmActionDialog from "@/components/ConfirmActionDialog";
import Loader from "@/components/Loader";
import { defaultRequestQuery } from "@/constants";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import useGetHotelsAPI from "@/services/useGetHotelsAPI";
import { Hotel } from "@/types";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddRoomDialog from "./components/AddRoomDialog";
import Room from "./components/Room";
import { defaultRoom, defaultSelectedHotel } from "./constants";
import useDeleteRoomAPI from "./hooks/useDeleteRoomAPI";
import useGetHotelRoomsAPI from "./hooks/useGetHotelRoomsAPI";
import { featuredDeals } from "@/pages/LandingPage/components/FeaturedDeals";
import { FormValuesTypes } from "./components/AddRoomForm";
import { TimePicker } from "@mui/lab";

const Rooms = () => {
  const [hotels, setHotels] = useState(featuredDeals);
  const [isAddRoomDialogOpen, setIsAddRoomDialogOpen] =
    useState<boolean>(false);
  const [roomToDelete, setRoomToDelete] = useState(defaultRoom);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] =
    useState<boolean>(false);
  const isFetching = false;
  // const { hotels, isFetching: isFetchingHotels } = useGetHotelsAPI({
  //   ...defaultRequestQuery,
  //   pageSize: 200,
  // });

  const [selectedHotel, setSelectedHotel] = useState(featuredDeals[0]);

  // const { rooms, refetchRooms, isFetchingRooms } = useGetHotelRoomsAPI(
  //   selectedHotel.id
  // );

  const handleOpenAddRoomDialog = () => {
    setIsAddRoomDialogOpen(true);
  };
  const handleCloseAddRoomDialog = () => {
    setIsAddRoomDialogOpen(false);
  };

  const handleOpenConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen(true);
  };
  const handleCloseConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen(false);
  };

  // const { deleteRoom, isPending } = useDeleteRoomAPI(
  //   refetchRooms,
  //   handleCloseConfirmDeleteDialog
  // );

  const handleDelete = () => {
    console.log(roomToDelete);
    setSelectedHotel({
      ...selectedHotel,
      children: selectedHotel.children.filter(
        (r) => Number(r?.roomId) !== roomToDelete?.id
      ),
    });
    handleCloseConfirmDeleteDialog();
    // deleteRoom({ hotelId: selectedHotel.id, roomId: roomToDelete.id });
  };

  const handleSelectHotel = (
    _: unknown,
    newOption: NonNullable<string | Hotel> | (string | Hotel)[] | null
  ) => {
    if (newOption && typeof newOption !== "string" && !Array.isArray(newOption))
      setSelectedHotel(newOption);
  };

  const renderRooms = selectedHotel?.children?.map((room) => (
    <Grid item key={room.roomId} xs={12} sm={6} md={4}>
      <Room
        room={room}
        setRoomToDelete={setRoomToDelete}
        handleOpenConfirmDeleteDialog={handleOpenConfirmDeleteDialog}
      />
    </Grid>
  ));

  const addRoom = (values: FormValuesTypes) => {
    const temp = selectedHotel;
    temp.children = [
      ...temp.children,
      {
        availability: true,
        capacityOfAdults: 2,
        capacityOfChildren: 1,
        price: `${values.cost}мянга`,
        roomAmenities: [
          {
            name: "Хорго-Тэрхийн цагаан нуур",
            description: "High-speed internet available in all rooms.",
          },
          {
            name: "Тайхар чулуу",
            description: "Flat-screen TV with cable channels.",
          },
          {
            name: "Чулуутын хавцал",
            description: "Individually controlled air conditioning.",
          },
        ],
        roomId: temp.children.length + 1,
        roomNumber: 101,
        roomPhotoUrl:
          "https://museum.ar.gov.mn/wp-content/uploads/2024/03/Horgiin-togoo-940x520-1.jpg",
        roomType: values.roomNumber,
      },
    ];
    setSelectedHotel(temp);
    handleCloseAddRoomDialog();
  };

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Stack gap={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="h4" component="h1">
              Аялалууд
            </Typography>
            <Stack>
              <Autocomplete
                disablePortal
                size="small"
                options={featuredDeals ?? []}
                onChange={handleSelectHotel}
                value={selectedHotel}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option?.title + ""}
                renderInput={(params) => (
                  <TextField name="hotel" placeholder="Hotel" {...params} />
                )}
              />
              <Typography variant="caption" ml={2}>
                Аялалын багцаас сонгоно уу
              </Typography>
            </Stack>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenAddRoomDialog}
              endIcon={<Plus />}
            >
              Аялал нэмэх
            </Button>
          </Stack>
          <Grid container spacing={2}>
            {false ? <Loader /> : renderRooms}
          </Grid>
        </Stack>
      </Container>
      <AddRoomDialog
        isOpen={isAddRoomDialogOpen}
        hotels={featuredDeals}
        // refetchRooms={refetchRooms}
        addRoom={addRoom}
        handleCloseAddRoomDialog={handleCloseAddRoomDialog}
      />
      <ConfirmActionDialog
        isOpen={isConfirmDeleteDialogOpen}
        title="Аялал устгах"
        description={`Та тухайн аялылн багцыг устгахдаа итгэлтэй байна уу`}
        handleClose={handleCloseConfirmDeleteDialog}
        actions={[
          {
            text: "Тийм",
            onClick: handleDelete,
            variant: "contained",
            // loading: isPending,
            size: "small",
          },
          {
            text: "Үгүй",
            onClick: handleCloseConfirmDeleteDialog,
            variant: "outlined",
            size: "small",
          },
        ]}
      />
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Rooms",
  pageAccessName: "Rooms",
});

export default withRouteHoC(Rooms);
