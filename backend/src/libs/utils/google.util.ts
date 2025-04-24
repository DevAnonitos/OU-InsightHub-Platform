import { googleOauthClient } from "@/configs/google.config";
import { TokenPayload } from "google-auth-library/build/src/auth/loginticket";;

export const generateGoogleAuthUrl = () => {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ];

  return googleOauthClient.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: scopes,
  });
};

export const exchangeCodeForTokens = async (code: string) => {
  const { tokens } = await googleOauthClient.getToken(code);

  if(!tokens.id_token) throw new Error("ID Token not found");
  return tokens;
}

export const verifyGoogleIdToken = async (idToken: string): Promise<TokenPayload> => {
  const ticket = await googleOauthClient.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if(!payload) throw new Error("Google Payload is empty!");

  return payload;
}
