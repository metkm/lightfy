import axios from "axios";
import { search } from "../api/search";

export const pauseSong = async () => {
  await axios.put("/me/player/pause");
}

export const playSong = async (query?: string) => {
  if (query) {
    let rightSide = query.split("play")[1];
    if (rightSide) {
      return await search(rightSide.trim());
    }
  }

  await axios.put("/me/player/play");
}
