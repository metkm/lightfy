import axios from "axios";

export const resumeSong = async () => {
  await axios.put("/me/player/pause");
}
