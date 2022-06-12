import axios from "axios";

// export const resumeSong = async () => {
//   await axios.put("/me/player/play");
// }

export const pauseSong = async () => {
  await axios.put("/me/player/pause");
}

export const playSong = async () => {
  await axios.put("/me/player/play");
}
