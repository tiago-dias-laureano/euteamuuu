import axios from "axios";

export const getSpotifyAccessToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "client_credentials",
    }),
    {
      headers: {
        Authorization: `Basic ${btoa(
          "0a71659be2c4462f81c6b1dc951a28ad:52765456750f47fe9c2a522833e0c22c"
        )}`,
      },
    }
  );
  return response.data.access_token;
};
