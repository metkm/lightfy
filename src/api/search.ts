import axios from "axios";
import { SearchResponse } from "../types";

export const search = async (q: string) => {
  const response = await axios.get<SearchResponse>("/search", {
    params: {
      q,
      type: "track"
    }
  });
  
  return response.data.tracks.items;
}