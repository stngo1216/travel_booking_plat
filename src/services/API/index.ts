import { axiosInstance } from "@/config/axios.config";
import { PaginationProps, QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";
import {
  GetCitiesResponse,
  GetHotelDetailsResponse,
  GetHotelsResponse,
} from "./types";

export const getCitiesAPI = async () => {
  const res = await axiosInstance.get<GetCitiesResponse>("/cities");
  return res.data;
};

export const getHotelsAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/hotels", query);

  const res = await axiosInstance.get<GetHotelsResponse>(requestUrl);

  const paginationJson = res.headers["x-pagination"];
  const { TotalPageCount }: PaginationProps = JSON.parse(paginationJson);

  return { hotels: res.data, TotalPageCount };
};

export const getHotelDetailsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<GetHotelDetailsResponse>(
    `/hotels/${hotelId}`
  );
  return res.data;
};
