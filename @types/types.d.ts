interface TopAnimeParams {
  data: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
      };
      approved: boolean;
      titles: [string];
      title: string;
      title_english: string;
      title_japanese: string;
      title_synonyms: [string];
      type: string;
      source: string;
      episodes: number;
      status: string;
      airing: boolean;
      aired: {
        from: string;
        to: string;
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
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
      producers: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      studios: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      themes: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

interface AnimeDataParams {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [string];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
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
  producers: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  licensors: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  studios: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
}

interface CharactersParams {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
  name_kanji: string;
  nicknames: [string];
  favorites: string;
  about: string;
  anime: [
    {
      role: string;
      anime: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
          webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
        };
        title: string;
      };
    }
  ];
  manga: [
    {
      role: string;
      manga: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
          webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
        };
        title: string;
      };
    }
  ];
  voices: [
    {
      language: string;
      person: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
          };
        };
        name: string;
      };
    }
  ];
}

interface AnimeSearchParams {
  data: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
      };
      approved: boolean;
      titles: [
        {
          type: string;
          title: string;
        }
      ];
      title: string;
      title_english: string;
      title_japanese: string;
      title_synonyms: [string];
      type: string;
      source: string;
      episodes: number;
      status: string;
      airing: boolean;
      aired: {
        from: string;
        to: string;
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
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
      producers: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      studios: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      themes: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

interface AllGenresParams {
  data: [
    {
      mal_id: number;
      name: string;
      url: string;
      count: number;
    }
  ];
}

interface GenresParams {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}
