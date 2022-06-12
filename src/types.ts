export type CommandTypes = "Play" | "Resume" | "Pause";

export interface Command {
  name: CommandTypes,
  description: string,
  icon: string,
  type: 'command',
  callback?: (extra?: string) => any
}

interface Artist {
  external_urls: ExternalUrls,
  href: string,
  id: string,
  name: string,
  type: 'artist',
  uri: string
}

interface ExternalUrls {
  spotify: string
}

interface ExternalIds {
  isrc: string
}

interface Image {
  height: number,
  url: string,
  width: number
}

interface Album {
  album_type: string,
  artists: Artist[],
  available_markets: string[],
  external_urls: ExternalUrls,
  href: string,
  id: string,
  images: Image[],
  name: string,
  release_date: string,
  release_date_precision: string,
  total_tracks: number,
  type: string,
  uri: string,
}

export interface TrackItem {
  album: Album,
  artists: Artist[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: ExternalIds,
  external_urls: ExternalUrls
  href: string,
  id: string,
  is_local: boolean,
  name: string,
  popularity: number,
  preview_url: string,
  track_number: number,
  type: 'track',
  uri: string
}

export interface Tracks {
  href: string,
  items: TrackItem[],
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number
}

export interface SearchResponse {
  tracks: Tracks
}
