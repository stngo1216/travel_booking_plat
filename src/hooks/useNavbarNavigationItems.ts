import { selectIsAdmin, selectIsUser } from "@/features/User";
import { useAppSelector } from "@/store";
import { NavigationItem } from "@/types";

const useNavbarNavigationItems = () => {
  const isUser = useAppSelector(selectIsUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  const navigationItems: Array<NavigationItem> = [
    {
      id: "features deals",
      label: "Манай аялал",
      isVisible: isUser,
    },
    {
      id: "trending destinations",
      label: "Оцлох аялал",
      isVisible: isUser,
    },

    // {
    //   id: "cities",
    //   label: "Manage Cities",
    //   to: "/cities",
    //   isVisible: isAdmin,
    // },
    // {
    //   id: "hotels",
    //   label: "Manage Hotels",
    //   to: "/hotels",
    //   isVisible: isAdmin,
    // },
    {
      id: "rooms",
      label: "Аялалын багцууд",
      to: "/rooms",
      isVisible: isAdmin,
    },
  ];

  return { navigationItems: navigationItems.filter((item) => item.isVisible) };
};

export default useNavbarNavigationItems;
