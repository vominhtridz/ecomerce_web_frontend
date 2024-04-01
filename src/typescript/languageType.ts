import { HomegefeatureType } from "./HomeType"
export interface languageType {
  header: {
    navbar: { title: string; route: string }[]
  }
  center: {
    homeFeatures: HomegefeatureType[]
    introduce: string
    products: {
      SelectPrices: { title: string; route: string }[]
      totalProducts: string
      views: { title: string; route: string }[]
    }
  }
  footer: {
    options: {
      license: { title: string; route: string }[]
      navbar: { title: string; route: string }[]
    }
  }
}
