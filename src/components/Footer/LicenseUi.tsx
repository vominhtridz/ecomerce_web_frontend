import { Link } from "react-router-dom"
import { useMyContext } from "../../context/context"

function LicenseUi() {
  const { language, langCode } = useMyContext()

  const getLicenseUi = () => {
    return language?.footer.options.license.map((license, index: number) => {
      return (
        <Link
          key={index}
          rel='stylesheet'
          to={license.route}
          className={`whitespace-nowrap flex items-center ${langCode == "vi" ? "text-sm tracking-tighter" : ""} `}
        >
          <p className='hover:text-white'>{license.title}</p>

          <span
            className={`px-1 ${license.title === "Certificates Of Analysis" ? "hidden" : ""}`}
          >
            |
          </span>
        </Link>
      )
    })
  }
  return (
    <section className='flex items-center flex-wrap justify-center'>
      {getLicenseUi()}
    </section>
  )
}
export default LicenseUi
