import { ChangeEvent, useState } from "react"

const langs = [
  { shortCode: "vi", label: "Viet Nam" },
  { shortCode: "ko", label: "Korean" },
  { shortCode: "en", label: "English" },
]
const LanguageSelector = () => {
  function chooseLanguage(e: ChangeEvent<HTMLSelectElement>): void {
    localStorage.setItem("language", e.target.value)
  }
  function getOptions() {
    return langs.map((lang, index) => {
      return (
        <option key={index} value={lang.shortCode}>
          {lang.label}
        </option>
      )
    })
  }

  return <select onChange={chooseLanguage}>{getOptions()}</select>
}

export default LanguageSelector
