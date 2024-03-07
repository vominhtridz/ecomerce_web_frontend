import english from "./english/translation"
import VietNam from "./vietnam/translation"
import Korean from "./korean/translation"
interface Language {
  [key: string]: object
}

// Sử dụng mảng thay vì đối tượng
const ContainLanguages: Language[] = [
  {
    en: english,
    vi: VietNam,
    ko: Korean,
  },
]
const defaultLanguage = VietNam
export { ContainLanguages, defaultLanguage }
