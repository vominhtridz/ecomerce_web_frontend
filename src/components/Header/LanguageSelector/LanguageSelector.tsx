import { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../context/context"

const langs = [
  { shortCode: "vi", label: "Việt Nam" },
  { shortCode: "ko", label: "Korean" },
  { shortCode: "en", label: "English" },
  { shortCode: "th", label: "ThaiLan" },
]
const LanguageSelector = () => {
  const { langCode } = useMyContext()
  const navigate = useNavigate()
  function ChangeLanguages(e: ChangeEvent<HTMLSelectElement>) {
    const ShortCodeLang = e.target.value
    navigate(`/${ShortCodeLang}`)
  }

  function getOptions() {
    return langs.map((lang, index) => {
      return (
        <option
          className='outline-slate-100 border-0 '
          selected={langCode == lang.shortCode}
          key={index}
          value={lang.shortCode}
        >
          {lang.label}
        </option>
      )
    })
  }

  return (
    <select
      className='max-md:p-1 outline-none border border-solid border-black  p-2 '
      onChange={ChangeLanguages}
    >
      {getOptions()}
    </select>
  )
}

export default LanguageSelector
