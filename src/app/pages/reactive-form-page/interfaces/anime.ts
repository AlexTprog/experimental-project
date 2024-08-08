export interface Anime {
  id: number;
  name: string;
  shortName: string;
  categories: number[];
  emision: Emision;
  image: string;
  rating: number;
  votes: number;
  description: string;
  episodes: number;
  studio: Studio;
  characters: Character[];
  themes: string[];
}

export interface Emision {
  start: string;
  end: string;
}

export interface Studio {
  name: string;
  location: string;
}

export interface Character {
  id: number;
  name: string;
  role: string;
  voiceActor: VoiceActor;
}

export interface VoiceActor {
  name: string;
  age: number;
  nationality: string;
}

export interface Category {
  id: number;
  name: string;
}
