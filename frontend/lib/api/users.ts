import { serverFetch } from "./serverFetch";
import { 
  GET_USER_ENDPOINT, 
  GET_USERS_ENDPOINT, 
  UPDATE_USER_ENDPOINT,
} from "@/constants/api-endpoint";

export const getCurrentUser = async () => {
  const response = await serverFetch(GET_USER_ENDPOINT, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch current user");
  }
  
  const json = await response.json();
  if (!json.data || !json.data.user) {
    throw new Error("User data is missing");
  }
  return json.data.user;
};

export const getAllUser = async () => {

};

export const updateUserById = async () => {

}