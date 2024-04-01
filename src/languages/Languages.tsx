import english from "./english/translation"
import VietNam from "./vietnam/translation"
import Korean from "./korean/translation"
import ThaiLan from "./thailan/translation"
interface Language {
  [key: string]: object
}

// Sử dụng mảng thay vì đối tượng
const ContainLanguages: Language = {
  en: english,
  vi: VietNam,
  ko: Korean,
  th: ThaiLan,
}

const defaultLanguage = VietNam
export { ContainLanguages, defaultLanguage }
