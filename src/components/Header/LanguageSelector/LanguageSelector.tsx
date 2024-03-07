import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const langs = [
  { shortCode: "vi", label: "Việt Nam" },
  { shortCode: "ko", label: "Korean" },
  { shortCode: "en", label: "English" },
]
const LanguageSelector = () => {
  const path = window.location.pathname.slice(1)
  // lấy route trình duyệt bỏ dấu / ví dụ nếu code là en thì select ngôn ngữ en
  const [selectLang, setSelectLang] = useState<string>(path)
  const navigate = useNavigate()
  function ChangeLanguages(e: ChangeEvent<HTMLSelectElement>) {
    const ShortCodeLang = e.target.value
    navigate(`/${ShortCodeLang}`)
    setSelectLang(ShortCodeLang)
    window.location.reload()
  }

  function getOptions() {
    return langs.map((lang, index) => {
      return (
        <option
          className='border-slate-500'
          selected={selectLang == lang.shortCode}
          key={index}
          value={lang.shortCode}
        >
          {lang.label}
        </option>
      )
    })
  }

  return (
    <select className='bg-slate-100 rounded-md p-2 ' onChange={ChangeLanguages}>
      {getOptions()}
    </select>
  )
}

export default LanguageSelector
