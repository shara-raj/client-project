export interface HealingPath {
  slug: string;
  title: string;
  shortDescription: string;
  videoSrc: string;

  intro: string;
  dos: string[];
  donts: string[];
}

export interface Condition {
  name: string;
}

export interface ConditionMudra {
  conditions: Condition | null;
}

export interface MudraFromDB {
  id: string;
  title: string;
  image: string;
  instructions: string;
  benefits?: string;
  condition_mudras?: ConditionMudra[];
}

export interface Mudra {
  id: string;
  title: string;
  image: string;
  instructions: string;
  benefits?: string;
  conditions: string[];
}
