import { getAuthCookies } from "../actions/cookies";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export const serverFetch = async (endpointUrl: any, options: RequestInit = {}) => {

  const { accessToken } = await getAuthCookies();

  const fetchOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` }: { }),
    },
  };

  const response = await fetch(`${baseUrl}${endpointUrl}`, fetchOptions);
  console.log(response); 
  return response;
};