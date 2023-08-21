export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type Volume = {
  value: number;
  unit: string;
};

type MashTemp = {
  temp: {
    value: number;
    unit: string;
  };
  duration: number;
};

type Fermentation = {
  temp: {
    value: number;
    unit: string;
  };
};

type Malt = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
};

type Hop = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
};

type Method = {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null | string;
};

type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
};

export type FilterType = {
  value: string;
  label: string;
  isChecked: boolean;
};
