import { useMyContext } from "../../../context/context"
import { HomegefeatureType } from "../../../typescript/HomeType"

export function HomeFeaturesUI() {
  const { language } = useMyContext()
  const getHomeFeatuares = () => {
    return language?.center.homeFeatures.map(
      (Homegeature: HomegefeatureType, index: number) => {
        return (
          <nav
            key={index}
            className='justify-between lg:w-1/3 max-lg:w-1/2 max-sm:w-full text-left flex items-center '
          >
            <span className='text-[18px] max-md:text-[15px] w-[40%] font-semibold whitespace-nowrap'>
              <span className={`${Homegeature.title.yours_db ? "block" : ""}`}>
                {Homegeature.title.yours}
              </span>
              {Homegeature.title.yours_db}
              <br />
              <strong className='uppercase text-2xl max-md:text-[17px] font-bold text-orange-600'>
                {Homegeature.title.percent}
                <br />
                {Homegeature.title.percent_db}
              </strong>
              <br />
              {Homegeature.title.who}
              <br />
              {Homegeature.title.end}
              <br />
              <strong className='text-slate-700  font-bold'>
                <div className=''>{Homegeature.title.work}</div>
                {Homegeature.title.work_db}
              </strong>
            </span>
            <img
              src={Homegeature.img}
              style={{ maxWidth: undefined }}
              className='w-[60%]'
              alt='Homegeature'
            />
          </nav>
        )
      },
    )
  }

  return (
    <div className='justify-between   text-left flex items-center max-lg:flex-wrap w-full'>
      {getHomeFeatuares()}
    </div>
  )
}
