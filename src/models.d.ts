export interface Customer {
  photo: string;
  id: number;
  drugId: null | number;
  lang: {
    ru: {
      name: string,
      age: string,
      desc: string,
    },
    en: {
      name: string,
      age: string,
      desc: string,
    },
  }
}
export interface Drug {
  id: number;
  count: number;
  color: string;
  bgColor: string;
  lang: {
    ru: {
      name: string,
    },
    en: {
      name: string,
    },
  }
}
export interface Settings {
  options: object[];
  selected: object;
}
