interface BaseResponse<T> {
  data: T;
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

interface ImageType {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface DateType {
  day: number;
  month: number;
  year: number;
}

interface OtherType {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Record<string, ImageType>;
  trailer: Record<string, string>;
  approved: boolean;
  titles: Array<{ type: string; title: string }>;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episode: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: DateType;
      to: DateType;
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: OtherType[];
  licensors: OtherType[];
  studios: OtherType[];
  genres: OtherType[];
  explicit_genres: OtherType[];
  themes: OtherType[];
  demographics: OtherType[];
}

export interface AnimeDetailResponse extends BaseResponse<Anime> {}
export interface AnimeResponse extends BaseResponse<Anime[]> {}
