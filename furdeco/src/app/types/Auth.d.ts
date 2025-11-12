export interface AuthSession {
  userid: number | string | null;
  accessToken: string | null;
  refreshToken: string | null;
}
export interface sessionToken {
  accessToken: string | null;
  refreshToken: string | null;
}
