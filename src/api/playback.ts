import axios from "axios";

export const pauseSong = async () => {
  await axios.put("/me/player/pause");
}

export const playSong = async (params?: Record<string, any>) => {
  await axios.put("/me/player/play", params);
}
