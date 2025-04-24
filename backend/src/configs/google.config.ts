import { OAuth2Client, OAuth2ClientOptions } from "google-auth-library";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

if(!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) throw new Error("Missing Google Oauth credentials")

const googleOauthOptions: OAuth2ClientOptions = {
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  redirectUri: GOOGLE_REDIRECT_URI,
};

export const googleOauthClient = new OAuth2Client(googleOauthOptions);