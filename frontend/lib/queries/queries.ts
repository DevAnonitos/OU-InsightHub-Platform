import { QUERY_KEYS } from "./queriesKeys";
import { getCurrentUser } from "../api/users";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}